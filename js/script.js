document.addEventListener('DOMContentLoaded', () => {
  sidenavs = document.querySelectorAll('.sidenav')
  M.Sidenav.init(sidenavs, {
    edge: 'right'
  })

  dropdown = document.querySelectorAll('.dropdown-trigger')
  dropdowncontainer = document.querySelector('.dropdown-container')
  M.Dropdown.init(dropdown, {
    constrainWidth: false,
    container: dropdowncontainer,
    coverTrigger: false
  })
})