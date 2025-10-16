const socket = io();
const editor = document.getElementById('editor');

editor.addEventListener('input', () => {
    const text = editor.value;
    socket.emit('text-change', text);
});

socket.on('update-text', (data) => {
    editor.value = data;
});
