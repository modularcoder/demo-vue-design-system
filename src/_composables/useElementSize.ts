import { ref, Ref, onMounted, onBeforeUnmount } from 'vue'

export function useElementSize(elRef: Ref<HTMLElement | undefined>) {
  const width = ref(0)
  const height = ref(0)
  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      width.value = entry.contentRect.width
      height.value = entry.contentRect.height
    }
  })
  onMounted(() => elRef.value && resizeObserver.observe(elRef.value))
  onBeforeUnmount(() => elRef.value && resizeObserver.unobserve(elRef.value))
  return {
    width,
    height,
  }
}
