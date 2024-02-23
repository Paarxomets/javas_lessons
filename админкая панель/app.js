function login() {
    var loginInput = document.getElementById("login-input").value;
    var passwordInput = document.getElementById("password-input").value;
    
    // Проверка логина и пароля
    if (loginInput === "admin" && passwordInput === "password") {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("admin-panel").style.display = "block";
    } else {
        alert("Неправильный логин или пароль");
    }
}

function logout() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("admin-panel").style.display = "none";
    
    // Сброс данных
    document.getElementById("text-editor").value = "";
    document.getElementById("photo-input").value = "";
}

function loadTextEditor() {
    document.getElementById("admin-panel").style.display = "none";
    document.getElementById("editor").style.display = "block";
}

function loadPhotoUploader() {
    document.getElementById("admin-panel").style.display = "none";
    document.getElementById("uploader").style.display = "block";
}

function saveText() {
    var newText = document.getElementById("text-editor").value;

  // Сохранение текста
    alert("Текст успешно сохранен: " + newText);
    
    cancelEditing();
}

function cancelEditing() {
    document.getElementById("admin-panel").style.display = "block";
    document.getElementById("editor").style.display = "none";
}

function uploadPhoto() {
    var file = document.getElementById("photo-input").files[0];

  // Загрузка фото
    alert("Фото успешно загружено: " + file.name);

    cancelUploading();
}

function cancelUploading() {
    document.getElementById("admin-panel").style.display = "block";
    document.getElementById("uploader").style.display = "none";
}
