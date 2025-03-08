function activity1_p2() {
    let btn = (document.getElementById('act1-p1-btn-2'));
    btn && btn.remove();
    t = 0;
    t = parseFloat(((X1_bar - X2_bar) /
        (Math.sqrt(Sp_sq) * Math.sqrt(1 / N1 + 1 / N2))).toFixed(3));
    let btn_txt = get_collapse_btn_text('Critical Threshold', 'act1-p2-div');
    maindiv.innerHTML += `
   ${btn_txt}
   <div class="collapse divide center-text" id="act1-p2-div">
      <h4  style='text-align: left;' class='fb-800 fs-20px'>Step 3: </h4>
      <br>

      <div id="act1-p2-tb-box">
      
      </div>
      <br>

      <div class="fs-20px fb-600"> alpha(&alpha;) = ${alpha}</div>
      <br>

      <div id='threshold-div' class="fs-20px">
         <div class="row justify-content-center" style="align-items:center;">
            <div class='col-sm-4'>
               $$ t_{n_1 + n_2 - 2, \\alpha/2} =  $$
            </div>
            <div class="col-sm-4" style="text-align:left">
               <input type='number' id='t1-inp' class='form-control fs-16px' />
            </div>
         </div>
         <br>
      <button class='btn btn-info std-btn' onclick='verify_threshold();' style='position: relative; left: 0w;' id='vf-threshold-btn'>Verify</button>
      </div>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    let tb_box = (document.getElementById('act1-p2-tb-box'));
    let tab = new Show_Table(['n<sub>1</sub>+n<sub>2</sub>-2', '0.1', '0.05', '0.025'], t_table_data, tb_box);
    tab.load_table();
    hide_all_steps();
    setTimeout(() => {
        show_step('act1-p2-div');
    }, 150);
}
function verify_threshold() {
    let t1_inp = (document.getElementById('t1-inp'));
    console.log(t1);
    if (!verify_values(parseFloat(t1_inp.value), t1)) {
        t1_inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        t1_inp.style.border = '1px solid #ced4da';
        t1_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('threshold-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <div>
         $$ t_{n_1 + n_2 - 2, \\alpha/2} = ${t1} $$   
      </div>
      <br>
      <button class='btn btn-info std-btn' style='margin: auto;' id='act1-p2-btn-1' onclick='a1_load_t_div()' >Next</button>
   `;
    setTimeout(() => MathJax.typeset(), 100);
}
function a1_load_t_div() {
    let btn = (document.getElementById('act1-p2-btn-1'));
    btn && btn.remove();
    let div = (document.getElementById('act1-p2-div'));
    div.innerHTML += `
   <br>

   <div id="t-div" class="fs-18px">
      <div class="row justify-content-center" style="align-items:center;">
         <div class='col-sm-4'>
            $$ t = \\frac{\\bar{X_1} - \\bar{X_2}}{S_p \\sqrt{\\frac{1}{n_1}+ \\frac{1}{n_2}}} =  $$
         </div>
         <div class="col-sm-4" style="text-align:left">
            <input type='number' id='t-inp' class='form-control fs-16px' />
         </div>
      </div>
      <br>
      <button class='btn btn-info std-btn' onclick='verify_t();' style='position: relative; left: 0w;' id='vf-t-btn'>Verify</button>
   </div>
   `;
    setTimeout(() => MathJax.typeset(), 100);
}
function verify_t() {
    let t_inp = (document.getElementById('t-inp'));
    console.log(t);
    if (!verify_values(parseFloat(t_inp.value), t)) {
        t_inp.style.border = '1px solid red';
        alert('Incorrect t value');
        return;
    }
    else {
        t_inp.style.border = '1px solid #ced4da';
        t_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = document.getElementById('t-div');
    div.innerHTML = '';
    div.innerHTML = `
   <div>
   $$ t = \\frac{\\bar{X_1} - \\bar{X_2}}{S_p \\sqrt{\\frac{1}{n_1}+ \\frac{1}{n_2}}} = ${t} $$
   </div>
   <br>
   <button class='btn btn-info std-btn' style='margin: auto;' id='act1-p2-btn-2' onclick='activity1_p3()' >Next</button>
   `;
    setTimeout(() => MathJax.typeset(), 100);
}
// activity1_p2();
//# sourceMappingURL=activity1_p2.js.map