<script setup lang="ts">
import { getColorFromImage } from 'mdui/functions/getColorFromImage.js'
import { setColorScheme } from 'mdui/functions/setColorScheme.js'
import { onMounted, useTemplateRef } from 'vue'

const image = new Image()
image.src = '/2017-01-19_22.25.40.png'
image.onload = () => {
  getColorFromImage(image).then((color) => setColorScheme(color))
}

const colors = [
  'primary-light',
  'primary-dark',
  'primary',
  'primary-container-light',
  'primary-container-dark',
  'primary-container',
  'on-primary-light',
  'on-primary-dark',
  'on-primary',
  'on-primary-container-light',
  'on-primary-container-dark',
  'on-primary-container',
  'inverse-primary-light',
  'inverse-primary-dark',
  'inverse-primary',
  'secondary-light',
  'secondary-dark',
  'secondary',
  'secondary-container-light',
  'secondary-container-dark',
  'secondary-container',
  'on-secondary-light',
  'on-secondary-dark',
  'on-secondary',
  'on-secondary-container-light',
  'on-secondary-container-dark',
  'on-secondary-container',
  'tertiary-light',
  'tertiary-dark',
  'tertiary',
  'tertiary-container-light',
  'tertiary-container-dark',
  'tertiary-container',
  'on-tertiary-light',
  'on-tertiary-dark',
  'on-tertiary',
  'on-tertiary-container-light',
  'on-tertiary-container-dark',
  'on-tertiary-container',
  'surface-light',
  'surface-dark',
  'surface',
  'surface-dim-light',
  'surface-dim-dark',
  'surface-dim',
  'surface-bright-light',
  'surface-bright-dark',
  'surface-bright',
  'surface-container-lowest-light',
  'surface-container-lowest-dark',
  'surface-container-lowest',
  'surface-container-low-light',
  'surface-container-low-dark',
  'surface-container-low',
  'surface-container-light',
  'surface-container-dark',
  'surface-container',
  'surface-container-high-light',
  'surface-container-high-dark',
  'surface-container-high',
  'surface-container-highest-light',
  'surface-container-highest-dark',
  'surface-container-highest',
  'surface-variant-light',
  'surface-variant-dark',
  'surface-variant',
  'on-surface-light',
  'on-surface-dark',
  'on-surface',
  'on-surface-variant-light',
  'on-surface-variant-dark',
  'on-surface-variant',
  'inverse-surface-light',
  'inverse-surface-dark',
  'inverse-surface',
  'inverse-on-surface-light',
  'inverse-on-surface-dark',
  'inverse-on-surface',
  'background-light',
  'background-dark',
  'background',
  'on-background-light',
  'on-background-dark',
  'on-background',
  'error-light',
  'error-dark',
  'error',
  'error-container-light',
  'error-container-dark',
  'error-container',
  'on-error-light',
  'on-error-dark',
  'on-error',
  'on-error-container-light',
  'on-error-container-dark',
  'on-error-container',
  'outline-light',
  'outline-dark',
  'outline',
  'outline-variant-light',
  'outline-variant-dark',
  'outline-variant',
  'shadow-light',
  'shadow-dark',
  'shadow',
  'surface-tint-color-light',
  'surface-tint-color-dark',
  'surface-tint-color',
  'scrim-light',
  'scrim-dark',
  'scrim',
]

const container = useTemplateRef('colorGrid')

onMounted(() => {
  colors.forEach((name) => {
    const varName = `--mdui-color-${name}`
    const color = getComputedStyle(document.documentElement).getPropertyValue(varName).trim()
    const sample = document.createElement('div')
    sample.className = 'color-sample'
    sample.style.backgroundColor = `rgb(var(${varName}))`
    sample.innerHTML = `
        <strong>${varName}</strong>
        <div class="label"></div>
      `
    // 如果背景太浅，换文字色为深色
    const rgb = color.split(', ').map((c) => parseInt(c))
    const brightness = 0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]
    console.log('brightness', brightness)
    if (brightness < 180) {
      sample.style.color = '#fff'
    }
    container.value!.appendChild(sample)
  })
})
</script>

<template>
  <div class="body">
    <h1>MDUI Material Color Preview</h1>
    <div ref="colorGrid" class="color-grid">
      <!-- 使用JS自动生成这些 -->
    </div>
  </div>
</template>

<style lang="css" scoped>
.body {
  font-family: sans-serif;
  background-color: rgb(var(--mdui-color-background));
  color: rgb(var(--mdui-color-on-background));
  padding: 2rem;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
}

.color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
}

.color-sample {
  border-radius: 8px;
  padding: 1rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

.label {
  font-size: 0.9rem;
  margin-top: 0.5rem;
  opacity: 0.8;
}
</style>
