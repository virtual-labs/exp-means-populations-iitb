function activity1_p3() {
    let btn = (document.getElementById('act1-p2-btn-2'));
    btn && btn.remove();
    let btn_txt = get_collapse_btn_text('Conclusion', 'act1-p3-div');
    maindiv.innerHTML += `
   ${btn_txt}
   <div class="collapse divide center-text" id="act1-p3-div">
      <h4  style='text-align: left;' class='fb-800 fs-20px'>Step 4: </h4>
      <br>

      <div  class="row justify-content-center">
         <div class="col-lg-4 fs-20px">
            $$ t_{n_1 + n_2 - 2, \\alpha/2} = ${t1}  $$
         </div>
         <div class="col-lg-4">
            $$ t = \\frac{\\bar{X_1} - \\bar{X_2}}{S_p \\sqrt{\\frac{1}{n_1}+ \\frac{1}{n_2}}} = ${t} $$
         </div>
      </div>

      <div class="fs-18px" style="text-align:left;">
         If 
         <span style="display:inline-block;">
            $$ |t| > t_{n_1 + n_2 - 2, \\alpha/2} $$
         </span> 
         then we will reject the null hypothesis else we fail to reject the null hypothesis.
      </div>
      <br>
      <div class="fs-18px" style="text-align:left;">
         So what can we conclude from the estimated values?
      </div>
      <br>
      <div class="row justify-content-center " style="align-items:center;">
            <div class="col-lg-6" >
               <button id="act1-null-hypo-btn1" onclick="a1_vf_null_hypo('1')" style='border: 1px solid gray; width: 100%; text-align: center;'>
               Reject the null hypothesis
               </button>
            </div>
            <div class="col-lg-6">
               <button id="act1-null-hypo-btn2" onclick="a1_vf_null_hypo('2')" style='border: 1px solid gray; width: 100%; text-align: center; margin-top:5px;'>
               Fail to reject the null hypothesis
               </button>
            </div>
         </div>
         <br>
         <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act1-p3-btn-1' onclick='a1_completed();' >Next</button>
   </div>
   `;
    setTimeout(() => MathJax.typeset(), 100);
    hide_all_steps();
    setTimeout(() => {
        show_step('act1-p3-div');
    }, 150);
    a1_find_null_hypothesis();
}
function a1_find_null_hypothesis() {
    if (Math.abs(t) > t1) {
        hypo_test_reject_op_a1 = 1;
    }
    else {
        hypo_test_reject_op_a1 = 2;
    }
}
function a1_vf_null_hypo(id) {
    let msg = '';
    let btn = (document.getElementById(`act1-null-hypo-btn${id}`));
    let next_btn = (document.getElementById('act1-p3-btn-1'));
    if (hypo_test_reject_op_a1 == 1) {
        msg = 'Null Hypothesis Rejected';
    }
    else if (hypo_test_reject_op_a1 == 2) {
        msg = 'We failed to reject null hypothesis';
    }
    if (parseInt(id) == hypo_test_reject_op_a1) {
        alert(`You are correct!! ${msg}`);
        btn.style.backgroundColor = 'yellow';
        btn.removeEventListener('click', a1_vf_null_hypo);
        btn.removeAttribute('onclick');
        document
            .getElementById(`act1-null-hypo-btn${3 - id}`)
            .removeAttribute('onclick');
        next_btn.style.display = 'block';
    }
    else {
        alert(`You have chosen incorrect option, observe the results again.`);
    }
}
function a1_completed() {
    let btn = (document.getElementById('act1-p3-btn-1'));
    btn && btn.remove();
    alert('Activity completed');
}
// activity1_p3();
//# sourceMappingURL=activity1_p3.js.map