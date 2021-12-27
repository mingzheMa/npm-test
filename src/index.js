import Alert from "./components/Alert"

const components = {
  Alert
}

const install = function (Vue) {
  components.forEach(comp => Vue.component(comp.name, comp))
}

export default {
  install,
  ...components
}
