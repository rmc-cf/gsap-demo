# GSAP ScrollTrigger 动画 Demo

## 📌 项目介绍  
本项目使用 **GSAP** 创建了一个基于 **ScrollTrigger** 的滚动触发动画。当页面滚动到 `.page2` 区域时，左右两侧的 `.strip-left` 和 `.strip-right` 元素会分别向中心和外侧滑动，形成动态的视觉效果。

---

## 🎥 动画效果
- **滚动触发**：当页面滚动到 `.page2` 时触发动画。
- **平滑滚动**：使用 `scrub: true` 实现动画同步滚动效果。
- **元素位移动画**：
  - `.strip-left` 从左侧移动到 `margin-left: 0%`。
  - `.strip-right` 从右侧移动到 `margin-left: -100%`。

---

## 🛠️ 使用方法

### 1️⃣ 引入 GSAP
在 HTML 文件中添加以下 CDN：
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
