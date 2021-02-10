export const GA_TRACKING_ID = 'G-NY1GR4ZYVW' // This is your GA Tracking ID

export const pageview = (url: string) => {
  (window as any).gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

export const event = ({ action, category, label, value }: { action: any, category: any, label: any, value: any }) => {
  (window as any).gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
