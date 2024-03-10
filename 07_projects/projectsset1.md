## project 1 solution 
```javascript

const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function (button){

  // console.log(button)
  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)

    if(e.target.id === 'grey' ){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white' ){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue' ){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow' ){
      body.style.backgroundColor = e.target.id
    }
  })
})
```


## project 2 solution 
```javascript

const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `please give a valid height ${height}`;
  } else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`
    
    if (bmi < 18.6){
    results.innerHTML = `${bmi} <br> under weight`}
    else if ( 18.6 <= bmi && bmi <= 24.9 ){
      results.innerHTML = `${bmi} <br> normal range`}
    else {
    results.innerHTML = `${bmi} <br> over weight`}
  }

})
```

## project 3 solution

```javascript

const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')

setInterval(function(){
  let date = new Date()
  clock.innerHTML = date.toLocaleTimeString()
},1000)
```