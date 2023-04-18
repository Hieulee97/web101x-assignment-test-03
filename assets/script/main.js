"use strict";
/*** REGION 1 - Global variables - Vùng khai báo biến, hằng số, tham số TOÀN CỤC */
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const gBtnInfoShow = $$("button.btn-info-show");
const gDivJobInfoDetail = $$(".jobs-info-details");

/*** REGION 2 - Vùng gán / thực thi sự kiện cho các elements */
gBtnInfoShow.forEach((element, index) => {
  element.onclick = function () {
    console.log("Button is on");
    if (gDivJobInfoDetail[index].classList.contains("hlt-show") == false) {
      gBtnInfoShow[
        index
      ].innerHTML = `<i class="fa-solid fa-caret-down" style="color: #000000"></i
      > View Less`;
      gDivJobInfoDetail[index].classList.add("hlt-show");
    } else {
      gBtnInfoShow[
        index
      ].innerHTML = `<i class="fa-solid fa-caret-down" style="color: #000000"></i
      > View More`;
      gDivJobInfoDetail[index].classList.remove("hlt-show");
    }
  };
});
/*** REGION 3 - Event handlers - Vùng khai báo các hàm xử lý sự kiện */
function onPageLoading() {
  console.log(gBtnInfoShow);
  console.log(gDivJobInfoDetail);

  // handledJobDetail();
}

function onSummitEmail(event) {
  event.preventDefault();
  const vEmailAdress = collectDataInp();
  console.log(vEmailAdress);
  if (validateData(vEmailAdress)) {
    handledSummitData();
  }
}

/*** REGION 4 - Common funtions - Vùng khai báo hàm dùng chung trong toàn bộ chương trình*/
// Gather Input data
function collectDataInp() {
  const vEmailInpEle = document.querySelector("input#inpEmailAdress");
  const vEmailVal = vEmailInpEle.value.replace(/\s/g, "");
  return vEmailVal;
}
// Validate Email
function validateData(paramEmail) {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (paramEmail == "") {
    alert("Vui lòng nhập vào địa chỉ email");
    return false;
  }
  if (!paramEmail.match(regex)) {
    alert("Địa chỉ email bạn nhập vào không hợp lệ");
    return false;
  } else {
    return true;
  }
}
//HandlerSummitEvent
function handledSummitData() {
  const divInfoDetal = document.querySelector("#personal-info .info-detail");
  const divInfoForm = document.querySelector("#personal-info .info-res-form");
  console.log(divInfoDetal);
  console.log(divInfoForm);
  divInfoDetal.classList.remove("hlt-hide");
  divInfoForm.classList.add("hlt-hide");
}
