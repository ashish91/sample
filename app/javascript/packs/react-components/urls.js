export const Urls = {
  defaultHeaders: {
    "Content-Type": "application/json",
    'X-CSRF-Token': document.querySelector("meta[name='csrf-token']").getAttribute("content"),
  },
  rootUrl: 'http://localhost:3000',
  jobs: {
    createUrl: '/api/jobs'
  },
  companies: {
    listUrl: '/api/companies'
  }
}
