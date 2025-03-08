let maindiv = (document.getElementById('pannelcreate'));
function activity1() {
    let text = `

   <div class='divide'>
   <div style='margin-top: 2vw;'>
   <h4 class="center-text fs-28px fb-700">Hypothesis testing: Comparing Means of two populations</h4>
   <p class="center-text fs-22px fb-500">Variance unknown but assumed equal</p>
   <br><br>
   
   <h4 class="fb-700 fs-28px" style="text-align:center">Activity 1</h4>
      <br><br>

      <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
   </div>
   </div>
   `;
    maindiv.innerHTML = text;
}
//for starting first activity
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    temp_btn && temp_btn.remove();
    let btn_text = get_collapse_btn_text('Dataset', 'act1-div');
    let text = `
      ${btn_text}
      <div class='collapse center-text divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='act1-div'>
         <h4  style='text-align: left;' class='fb-800 fs-20px'>Step 1: </h4>
         <br>
         <div class="row justify-content-center fs-20px fb-500">
            <div class="col-md-4">
               n<sub>1</sub> = ${N1}
            </div>
            <div class="col-md-4">
               n<sub>2</sub> = ${N2}
            </div>
         </div>
         <br>
         <div class='table-responsive' style='margin: auto;'>
            <table class='table table-bordered ' style='background-color: white;' >
               <tr id='x1-values'>
                  <th class='table-dark'>X<sub>1</sub></th>
               </tr>
               <tr id='x2-values'>
                  <th class='table-dark'>X<sub>2</sub></th>
               </tr>
            </table>
         </div>
         <br>
         <p class="fs-16px" style="text-align:left;">Calculate,</p>

         <div class="row fs-18px" style="align-items:center;">
            <div id="x-bar-div">
               <div class="row" style="justify-content:center;align-items:center;" >
                  <div class="col-sm-4">
                     $$ \\bar{X_1} = \\frac {\\Sigma{X_1}}{n_1} = $$
                  </div>
                  <div class="col-sm-4" style="text-align:left">
                     <input type='number' id='x1-bar-inp' class='form-control fs-16px' />
                  </div>
               </div>
               <div class="row" style="justify-content:center;align-items:center;" >
                  <div class="col-sm-4">
                     $$ \\bar{X_2} = \\frac {\\Sigma{X_2}}{n_2} = $$
                  </div>
                  <div class="col-sm-4" style="text-align:left">
                     <input type='number' id='x2-bar-inp' class='form-control fs-16px' />
                  </div>
               </div>
               <br>
               <button class='btn btn-info std-btn' onclick='verify_x_bar();' style='position: relative; left: 0w;' id='vf-bar-btn'>Verify</button>
            </div>
         </div>
      </div>
   `;
    maindiv.innerHTML += text;
    setTimeout(() => MathJax.typeset(), 100);
    hide_all_steps();
    setTimeout(() => {
        show_step('act1-div');
    }, 150);
    a1_internal_calculation();
}
function a1_internal_calculation() {
    X1 = [];
    X2 = [];
    X1_bar = 0;
    X2_bar = 0;
    let arr1 = [];
    let arr2 = [];
    while (arr1.length < N1) {
        let rv = parseFloat((Math.random() * 40).toFixed(3));
        if (arr1.indexOf(rv) === -1) {
            arr1.push(rv);
            X1_bar += rv;
        }
    }
    while (arr2.length < N2) {
        let rv = parseFloat((Math.random() * 40).toFixed(3));
        if (arr2.indexOf(rv) === -1) {
            arr2.push(rv);
            X2_bar += rv;
        }
    }
    X1_bar = parseFloat((X1_bar / N1).toFixed(3));
    X2_bar = parseFloat((X2_bar / N2).toFixed(3));
    X1 = arr1;
    X2 = arr2;
    show_x();
}
function show_x() {
    let x1_row = (document.getElementById('x1-values'));
    let x2_row = (document.getElementById('x2-values'));
    for (let i = 0; i < N1; i++) {
        x1_row.innerHTML += `<td>${X1[i]}</td>`;
        x2_row.innerHTML += `<td>${X2[i]}</td>`;
    }
}
function verify_x_bar() {
    let x1_bar_inp = (document.getElementById('x1-bar-inp'));
    let x2_bar_inp = (document.getElementById('x2-bar-inp'));
    console.log(X1_bar, X2_bar);
    if (!verify_values(parseFloat(x1_bar_inp.value), X1_bar)) {
        x1_bar_inp.style.border = '1px solid red';
        alert('Incorrect X1 bar value');
        return;
    }
    else {
        x1_bar_inp.style.border = '1px solid #ced4da';
        x1_bar_inp.disabled = true;
    }
    if (!verify_values(parseFloat(x2_bar_inp.value), X2_bar)) {
        x2_bar_inp.style.border = '1px solid red';
        alert('Incorrect X2 bar value');
        return;
    }
    else {
        x2_bar_inp.style.border = '1px solid #ced4da';
        x2_bar_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('x-bar-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-sm-5">
            $$ \\bar{X_1} = \\frac {\\Sigma{X_1}}{n_1} = ${X1_bar} $$
         </div>
         <div class="col-sm-5">
            $$ \\bar{X_2} = \\frac {\\Sigma{X_2}}{n_2} = ${X2_bar} $$
         </div>
      </div>
      <br>
      <button class='btn btn-info std-btn' style='margin: auto;' id='act1-btn-1' onclick='activity1_p1()' >Next</button>
   `;
    setTimeout(() => MathJax.typeset(), 100);
}
activity1();
//# sourceMappingURL=activity1.js.map