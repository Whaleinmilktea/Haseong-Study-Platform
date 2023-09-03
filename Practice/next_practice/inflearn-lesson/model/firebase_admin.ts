import * as admin from "firebase-admin"
// import ~ as 문법은 모듈 이름 그대로가 아닌 모듈을 다른 이름으로 불러오는 것

interface Config { // ? 타입을 왜 이렇게 정한거지? => 강의에서는 "기본명세라고 되어있습니다"
  credential: {
    privateKey: string;
    clientEmail: string;
    projectId: string;
  }
}

// Singleton-class : 파이어베이스 관련 설정을 로드하고 초기화하는 로직
export default class FirebaseAdmin {
  public static instance: FirebaseAdmin;

  private init = false;

  public static getInstance(): FirebaseAdmin {
    // 외부에서 초기화 진행시 사용할 메서드 외부 접근시, FirebaseAdmin.getInstance
    if (FirebaseAdmin.instance === undefined || FirebaseAdmin.instance === null) {
      // 초기화 진행
      FirebaseAdmin.instance = new FirebaseAdmin();
      // TODO : 환경을 초기화한다
      FirebaseAdmin.instance.bootstrap();
    }
  return FirebaseAdmin.instance;
  }

  private bootstrap(): void {
    const haveApp = admin.apps.length !== 0;
    if (haveApp) {
      this.init = true; // 클래스 내부에서 선언된 init이기 때문에, 접근하여 변경할 수 있음
      return
    }

    const config: Config = {
      credential: {
        projectId: process.env.projectId || "",
        clientEmail: process.env.clientEmail || "",
        privateKey: (process.env.privateKey || "").replace(/\\n/g, "\n")
      }
    }
    admin.initializeApp({ credential: admin.credential.cert(config.credential)});
    console.info("bootstrap firebase admin")
  }

  /** Firestore를 반환 */
  // ? setter와 getter
  public get Firebase(): FirebaseFirestore.Firestore {
    if (this.init === false) {
      this.bootstrap();
    }
    return admin.firestore();
  }

  public get Auth(): admin.auth.Auth {
    if (this.init === false) {
      this.bootstrap();
    }
    return admin.auth();
  }
}