import Post from '@models/Post'
// import json from './assets/json.json'
// import xml from './assets/data.xml'
// import csv from './assets/data.csv'
// import WebpackLogo from '@/assets/webpack-logo.png'
// import './babel'
import './styles/styles.css'
import './styles/scss.scss'

let counter = 0

window.addEventListener('click', () => {
    counter++
})

window.getCounter = () => {
    console.log(counter);
}