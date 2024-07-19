document.addEventListener("DOMContentLoaded", function() {
    var sidebarToggle = document.getElementById('sidebar-toggle');
    var sidebarDiv = document.getElementById('sidebar-div');
    var mainParentDiv = document.getElementById('mainparent-div');
    
    sidebarToggle.onclick = function() {
        if (sidebarDiv.style.left === '-200px') {
            sidebarDiv.style.left = '0';
            mainParentDiv.style.marginLeft = '200px';
        } else {
            sidebarDiv.style.left = '-200px';
            mainParentDiv.style.marginLeft = '0';
        }
    };
});
