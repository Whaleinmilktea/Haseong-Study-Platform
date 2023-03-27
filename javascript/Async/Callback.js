// Udemy Callback 함수 예제

const button = document.querySelector('button')
const output = document.querySelector('p')

const trackUserHandler = () => {
  navigator.geolocation.getCurrentPosition(
    posData => {
      setTimeout(() => { // navigator의 비동기식
        console.log(posData)
      }, 1000)
    },
    err => {
      console.log(err)
    }
  )
  setTimeout(() => {
    console.log('Time done!') // trackUserHandler의 비동기식
  }, 0)
  console.log('Getting position...')
}

button.addEventListener('click', trackUserHandler);
