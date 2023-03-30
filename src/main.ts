import './style.css'
import useDraggable from './useDraggable'

const demo = document.createElement('div')
demo.classList.add('demo')

const app = document.querySelector<HTMLDivElement>('#app')
app?.appendChild(demo)

useDraggable(demo)