document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.getElementById('largeTextToggleCheckbox');
  const statusText = document.querySelector('.toggle-status');

  function updateStatus() {
    if (checkbox.checked) {
      statusText.textContent = 'ON';
      statusText.style.color = getComputedStyle(document.documentElement).getPropertyValue('--main-1').trim();
      statusText.style.transform = 'translateX(10px)';  // 오른쪽으로 10px 이동
    } else {
      statusText.textContent = 'OFF';
      statusText.style.color = getComputedStyle(document.documentElement).getPropertyValue('--grayscale-6').trim();
      statusText.style.transform = 'translateX(0)';  // 원위치
    }
  }

  updateStatus();  // 초기 상태 반영

  checkbox.addEventListener('change', updateStatus);




  $(".content-mypage-main .my-logout").click(function(){
  $(".modal-wrap").fadeIn(200, function(){
    $(this).css("display", "flex");
  });
});
});