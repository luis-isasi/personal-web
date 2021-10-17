export const pageView = (url: any) => {
  window.gtag('config', process.env.NEXT_PUBLIC_ANALYTICS_ID as string, {
    page_path: url,
  })
}

export const event = ({ action, params }: { action: any; params: any }) => {
  window.gtag('event', action, params)
}
