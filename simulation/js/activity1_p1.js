function activity1_p1() {
    let btn = (document.getElementById('act1-btn-1'));
    btn && btn.remove();
    a1_internal_calculation2();
    let btn_txt = get_collapse_btn_text('Variance of X', 'act1-p1-div');
    maindiv.innerHTML += `
      ${btn_txt}
      <div class="collapse divide center-text" id="act1-p1-div">
         <h4  style='text-align: left;' class='fb-800 fs-20px'>Step 2: </h4>
         
         <br>

         <p class="fs-16px" style="text-align:left;">
            Calculate the variance of X 
         </p>
         <div id="act1-p1-tb-box1">

         </div>

         
      </div>
   `;
    setTimeout(() => MathJax.typeset(), 100);
    hide_all_steps();
    setTimeout(() => {
        show_step('act1-p1-div');
    }, 150);
    let tb_box = (document.getElementById('act1-p1-tb-box1'));
    let header = [
        'X<sub>1</sub>',
        'X<sub>2</sub>',
        '(X<sub>1</sub>-X<sub>1</sub>&#x0305;)',
        '(X<sub>1</sub>-X<sub>1</sub>&#x0305;)<sup>2</sup>',
        '(X<sub>2</sub>-X<sub>2</sub>&#x0305;)',
        '(X<sub>2</sub>-X<sub>2</sub>&#x0305;)<sup>2</sup>',
    ];
    // let tab = new Show_Table(header, act1_table_data_1, tb_box);
    // tab.load_table();
    let tab = new Verify_Rows_Cols(header, act1_table_data_1, [0], [[2, 3, 4, 5]], '', tb_box, true, true, a1_load_s_sq_div);
    tab.load_table();
}
function a1_internal_calculation2() {
    act1_table_data_1 = [];
    sum_x1_x1_bar_sq = 0;
    sum_x2_x2_bar_sq = 0;
    S1_sq = 0;
    S2_sq = 0;
    Sp_sq = 0;
    for (let i = 0; i < N1; i++) {
        let arr = [];
        let temp1 = parseFloat((X1[i] - X1_bar).toFixed(3));
        let temp2 = parseFloat((X2[i] - X2_bar).toFixed(3));
        let temp3 = parseFloat((Math.pow(temp1, 2)).toFixed(3));
        let temp4 = parseFloat((Math.pow(temp2, 2)).toFixed(3));
        arr.push(X1[i]);
        arr.push(X2[i]);
        arr.push(temp1);
        arr.push(temp3);
        arr.push(temp2);
        arr.push(temp4);
        act1_table_data_1.push(arr);
        sum_x1_x1_bar_sq += temp3;
        sum_x2_x2_bar_sq += temp4;
    }
    sum_x1_x1_bar_sq = parseFloat(sum_x1_x1_bar_sq.toFixed(3));
    sum_x2_x2_bar_sq = parseFloat(sum_x2_x2_bar_sq.toFixed(3));
    S1_sq = parseFloat((sum_x1_x1_bar_sq / (N1 - 1)).toFixed(3));
    S2_sq = parseFloat((sum_x2_x2_bar_sq / (N2 - 1)).toFixed(3));
    Sp_sq = parseFloat((((N1 - 1) * S1_sq + (N2 - 1) * S2_sq) / (N1 + N2 - 2)).toFixed(3));
}
function a1_load_s_sq_div() {
    let div = (document.getElementById('act1-p1-div'));
    div.innerHTML += `
   <br>

   <div id="act1-s-2-div">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-sm-5">
            $$ S_1^2 = \\frac{\Σ (X_1 - \\bar{X_1})^2}{n_1 - 1} = $$
         </div>
         <div class="col-sm-4" style="text-align:left">
            <input type='number' id='s1-inp' class='form-control fs-16px' />
         </div>
      </div>
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-sm-5">
            $$ S_2^2 = \\frac{\Σ (X_2 - \\bar{X_2})^2}{n_2 - 1} = $$
         </div>
         <div class="col-sm-4" style="text-align:left">
            <input type='number' id='s2-inp' class='form-control fs-16px' />
         </div>
      </div>
      <br>
      <button class='btn btn-info std-btn' onclick='verify_s_sq();' style='position: relative; left: 0w;' id='vf-s-sq-btn'>Verify</button>
   </div>
   `;
    setTimeout(() => MathJax.typeset(), 100);
}
function verify_s_sq() {
    let s1_inp = (document.getElementById('s1-inp'));
    let s2_inp = (document.getElementById('s2-inp'));
    console.log(S1_sq, S2_sq);
    if (!verify_values(parseFloat(s1_inp.value), S1_sq)) {
        s1_inp.style.border = '1px solid red';
        alert('Incorrect S1 square value');
        return;
    }
    else {
        s1_inp.style.border = '1px solid #ced4da';
        s1_inp.disabled = true;
    }
    if (!verify_values(parseFloat(s2_inp.value), S2_sq)) {
        s2_inp.style.border = '1px solid red';
        alert('Incorrect S2 square value');
        return;
    }
    else {
        s2_inp.style.border = '1px solid #ced4da';
        s2_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-s-2-div'));
    div.innerHTML = '';
    div.innerHTML = `
   <div class="row justify-content-center" style="align-items:center;">
      <div class="col-md-6">
         $$ S_1^2 = \\frac{\Σ (X_1 - \\bar{X_1})^2}{n_1 - 1} = ${S1_sq} $$
      </div>
      <div class="col-md-6">
         $$ S_2^2 = \\frac{\Σ (X_2 - \\bar{X_2})^2}{n_2 - 1} = ${S2_sq} $$
      </div>
   </div>
   <br>
   <button class='btn btn-info std-btn' style='margin: auto;' id='act1-p1-btn-1' onclick='a1_load_sp_div()' >Next</button>
   `;
    setTimeout(() => MathJax.typeset(), 100);
}
function a1_load_sp_div() {
    let btn = (document.getElementById('act1-p1-btn-1'));
    btn && btn.remove();
    let div = (document.getElementById('act1-p1-div'));
    div.innerHTML += `
   <br>
   <div id='act1-sp-div'>
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-5">
            $$ S_p^2 = \\frac{(n_1-1)S_1^2 + (n_2 - 1)S_2^2}{n_1+n_2-2} = $$
         </div>
         <div class="col-md-5">
            <input type='number' id='sp-inp' class='form-control fs-16px' />
         </div>
      </div>
      <br>
      <button class='btn btn-info std-btn' onclick='verify_sp();' style='position: relative; left: 0w;' id='vf-sp-btn'>Verify</button>
   </div>
   `;
    setTimeout(() => MathJax.typeset(), 100);
}
function verify_sp() {
    let sp_inp = (document.getElementById('sp-inp'));
    console.log(Sp_sq);
    if (!verify_values(parseFloat(sp_inp.value), Sp_sq)) {
        sp_inp.style.border = '1px solid red';
        alert('Incorrect Sp Square value');
        return;
    }
    else {
        sp_inp.style.border = '1px solid #ced4da';
        sp_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-sp-div'));
    div.innerHTML = '';
    div.innerHTML = `
   <div>
      $$ S_p^2 = \\frac{(n_1-1)S_1^2 + (n_2 - 1)S_2^2}{n_1+n_2-2} = ${Sp_sq} $$
   </div>
   <br>
   <button class='btn btn-info std-btn' style='margin: auto;' id='act1-p1-btn-2' onclick='activity1_p2()' >Next</button>
   `;
    setTimeout(() => MathJax.typeset(), 100);
}
// activity1_p1();
//# sourceMappingURL=activity1_p1.js.map