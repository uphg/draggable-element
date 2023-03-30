
export type Position = { x: number, y: number }

// 可拖拽 div（兼容移动端）
function useDraggable(el: HTMLElement) {
  let pressedDelta: Position | null = null

  el.addEventListener('pointerdown', (e) => {
    const rect = el.getBoundingClientRect()
    pressedDelta = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    }
  })

  document.addEventListener('pointermove', (e) => {
    if (!pressedDelta) return

    el.style.top = `${e.clientY - pressedDelta.y}px`
    el.style.left = `${e.clientX - pressedDelta.x}px`
  })

  document.addEventListener('pointerup', () => {
    pressedDelta = null
  })
}

// 可拖拽 div（兼容 ES 旧版）
export function _useDraggable(el: HTMLElement) {
  let position: Position | null = null

  el.style.top = '10px'
  el.style.left = '10px'

  el.addEventListener('mousedown', (e) => {
    const { clientX, clientY } = e

    position = {
      x: clientX,
      y: clientY
    }
  })

  document.addEventListener('mousemove', (e) => {
    if (!position) return
    const { clientX: x, clientY: y } = e
    const deltaX = x - position.x
    const deltaY = y - position.y
    const left = parseInt(el.style.left) || 0
    const top = parseInt(el.style.top) || 0

    el.style.left = `${left + deltaX}px`
    el.style.top = `${top + deltaY}px`

    position.x = x
    position.y = y
  })

  document.addEventListener('mouseup', () => {
    if (!position) return
    position = null
  })
}

export default useDraggable
