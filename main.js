




$("button").click(function(){
    const bill = $('#bill').val() || 0;
 /*   let tip =$('input[name="radioGroup"]:checked').val();
    if($('#custom').val() !== 0){
       let tip = $('#custom').val();  
    }else{
       const tip =$('input[name="radioGroup"]:checked').val();
    }
*/
    let curRadio = $('input[name="radioGroup"]:checked').val();
    let tip;
    if($("#custom").val() !== '')
        {
            tip=$("#custom").val();
        }
        else
        {
            tip=curRadio;
        }

        console.log(tip,$("#custom").val())

    const people =$('#people').val(); 
    if(!people || people <= 0){
        $('.err').show();
    }else{
    tip = parseFloat(tip);    
    const tip_per = parseFloat(bill*tip/people).toFixed(2);
    const bill_per = parseFloat(bill/people).toFixed(2);
    let total_per = parseFloat(tip_per) + parseFloat(bill_per);
    total_per = total_per.toFixed(2);
    $('.err').hide();
    $('#tip-per').text('$'+tip_per);
    $('#total-per').text('$'+total_per);}
  });



