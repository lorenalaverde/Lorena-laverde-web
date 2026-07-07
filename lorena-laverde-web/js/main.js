/* Lorena Laverde — interacciones del sitio */
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('leadForm').addEventListener('submit', async function(e){
            e.preventDefault();
            const f = e.target;
            const btn = f.querySelector('button'); btn.textContent = 'Enviando...'; btn.disabled = true;
            try{
              await fetch(f.action, {method:'POST', body:new FormData(f), headers:{'Accept':'application/json'}});
              f.style.display = 'none';
              document.getElementById('leadOk').style.display = 'block';
            }catch(err){
              btn.textContent = 'Enviarme la guía'; btn.disabled = false;
              alert('Hubo un problema. Intenta de nuevo o escríbeme por WhatsApp.');
            }
          });
});
