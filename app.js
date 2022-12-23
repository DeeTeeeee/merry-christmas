window.addEventListener("load", () => {
  const santaClaus = document.getElementById("santa");
  const audio = document.getElementById("song");
  document.addEventListener("click", () => {
    audio.play()
  })
  let santaIsAppear = false;
  const handleSantaClaus = () => {
    santaClaus.style.transform = "translateX(0%)";
    santaIsAppear = true;
  };
  const handleDialog = () => {
    if (santaIsAppear) {
      const template = `
        <div class="dialog">
            <div class="point"></div>
            <h1>
                <span>Hello</span>
                <span>Nhật</span>
                <span>Vy,</span>
                <span>ta</span>
                <span>là</span>
                <span>ông</span>
                <span>già</span>
                <span>Noel</span>
                <span>đây.</span>
                <span>Có</span>
                <span>phải</span>
                <span>con</span>
                <span>trông</span>
                <span>ngóng</span>
                <span>sự</span>
                <span>xuất</span>
                <span>hiện</span>
                <span>của</span>
                <span>ta</span>
                <span>từ</span>
                <span>rất</span>
                <span>lâu</span>
                <span>rồi</span>
                <span>phải</span>
                <span>không?</span>
                <span>Hôm</span>
                <span>nay</span>
                <span>ta</span>
                <span>đến</span>
                <span>đây</span>
                <span>vào</span>
                <span>ngày</span>
                <span>Giáng</span>
                <span>Sinh</span>
                <span>để</span>
                <span>gửi</span>
                <span>đến</span>
                <span>con</span>
                <span>một</span>
                <span>món</span>
                <span>quà</span>
                <span>bất</span>
                <span>ngờ,</span>
                <span>cùng</span>
                <span>chờ</span>
                <span>đón</span>
                <span>nhé</span>
            </h1>
          </div>
    `;
      santaClaus.insertAdjacentHTML("beforeend", template);
      const dialog = santaClaus.querySelector(".dialog");
      setTimeout(() => {
        dialog.style.display = "none";
      }, 8000);
      setTimeout(() => {
        santaClaus.style.transform = "translateX(-100%)";
      }, 10000);
      setTimeout(() => {
        handleGift();
      }, 12000);
    }
  };
  const handleGift = () => {
    const template = `
    <div class="noelGift">
        <img class="noelGiftImage" src="./image/gift.png" alt="">
    </div>
  `;
    santaClaus.remove();
    document.body.insertAdjacentHTML("beforeend", template);
    const gift = document.querySelector(".noelGift");
    const giftImage = gift.querySelector(".noelGiftImage");
    setTimeout(() => {
      giftImage.style.transform = "translateY(0%)";
      giftImage.style.cursor = "pointer";
      giftImage.addEventListener("click", handleClickGift);
    }, 2000);
  };
  const handleClickGift = (event) => {
    event.target.parentNode.classList.add("noelGift-disappear");
    event.target.parentNode.remove();
    const template = `
    <div style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; transform: rotate(10deg)">
      <div id="card">
        <h4>💘From Santa Claus With Love💘</h4>
        <div class="cardImage">
            <img
              src="./image/em.jpg"
            />
        </div>
        <h4>
          Chúc em Giáng Sinh vui vẻ, luôn xinh đẹp, ngoan ngoãn, khịa ít lại và siêng năng làm việc kiếm thật nhiều
          tiền hơn. Hi vọng là em sẽ cảm thấy vui với món quà này. Yêu em rất nhiều💘
        </h4>
      </div>
    </div>
  `;
    document.body.insertAdjacentHTML("afterbegin", template);
    const card = document.querySelector("#card");
    setTimeout(() => {
      card.classList.add("card-show");
    }, 100);
  };
  setTimeout(() => {
    handleSantaClaus();
  }, 1000);
  setTimeout(() => {
    handleDialog();
  }, 3000);
});
