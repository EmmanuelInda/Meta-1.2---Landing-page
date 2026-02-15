document.getElementById('btnCimarron').addEventListener('click', function() {
    alert('Acariciaste al cimarrón.');
});

document.getElementById('btnPickUp').addEventListener('click', function() {
    alert('Te subiste al pick up.');
});

document.getElementById('btnSend').addEventListener('click', function() {
    const imagen1 = document.getElementById('img1');
    const imagen2 = document.getElementById('img2');
    
    const paisajes1 = [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1434394354979-a235cd36751d?auto=format&fit=crop&w=600&q=80"
    ];
    
    const paisajes2 = [
        "https://images.unsplash.com/photo-1501854140884-074bf22ca911?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80"
    ];
    
    const azar1 = Math.floor(Math.random() * paisajes1.length);
    const azar2 = Math.floor(Math.random() * paisajes2.length);
    
    imagen1.src = paisajes1[azar1];
    imagen2.src = paisajes2[azar2];
});
