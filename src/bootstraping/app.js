/**
 * IMPORT
 */
//axios
import axios from "axios"
//toastr
import toastr from "toastr"
/////
///// set global variables
/////
window.axios = axios
window.toastr = toastr
/////
///// Options
/////

// Axios
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest"
// Toastr
toastr.options = {
    debug: false,
    newestOnTop: false,
    progressBar: false,
    positionClass: "toast-top-center",
    preventDuplicates: false,
    onclick: null,
    showDuration: "300",
    hideDuration: "10000",
    timeOut: "10000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
}
/////
///// Requires
/////
require("toastr/build/toastr.min.css")
require("toastr/build/toastr.min.js")
