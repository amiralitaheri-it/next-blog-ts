import Swal from "sweetalert2";

// fire sweetalert
export function sweetAlert(title, icon = "success", timer = 3000, position = 'top', showConfirmButton = false, timerProgressBar = true, isToast = true) {
    Swal.fire({
        title: title,
        icon: icon,
        showConfirmButton: showConfirmButton,
        timerProgressBar: timerProgressBar,
        timer: timer,
        toast: isToast,
        position: position,
    });
}