import { boot } from 'quasar/wrappers'

const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX' // replace with your ID

export default boot(() => {
  if (process.env.MODE === 'spa' && typeof window !== 'undefined') {
    const script = document.createElement('script')
    script.setAttribute('async', '')
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    function gtag(){ window.dataLayer.push(arguments) }
    gtag('js', new Date())
    gtag('config', GA_MEASUREMENT_ID)
  }
})
