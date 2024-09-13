var change_document_value;
var change_radio_value;
var change_price_document_value;
var change_number_document_value;
var change_percentage_document_value;
var hide_contract_question_question;
var show_contract_question_question;
var change_document_element_id;
var change_document_text_on_keyup;
var go_to_next_step;
var go_to_previous_step;
var update_date_into_target_element;
var change_next_step_flow;
var reset_default_value;
var hide_traget_element;
var show_traget_element;
var show_target_element_if_value_not_blank;
var hide_show_element_by_dropdown; 
var create_pdf_from_html; 
var save_html_for_pdf_and_docs; 
var Export2Word; 
var download_pdf_from_my_document;

const spanish_count = {1:"PRIMERA", 2:"SEGUNDA", 3:"TERCERA",4:"CUARTA",5:"QUINTA",6:"SEXTA",7:"SÉPTIMA",8:"OCTAVA",9:"NOVENA",10:"DÉCIMA",11:"DÉCIMO PRIMERA",12:"DÉCIMO SEGUNDA",13:"DÉCIMO TERCERA",14:"DÉCIMO CUARTA",15:"DÉCIMO QUINTA",16:"DÉCIMO SEXTA",17:"DÉCIMO SÉPTIMA",18:"DÉCIMO OCTAVA",19:"DÉCIMO NOVENA",20:"Vigésimo",21:"Vigésimo PRIMERA",22:"Vigésimo SEGUNDA",23:"Vigésimo TERCERA",24:"Vigésimo CUARTA",25:"Vigésimo QUINTA",26:"Vigésimo SEXTA",27:"Vigésimo SÉPTIMA",28:"Vigésimo OCTAVA",29:"Vigésimo NOVENA",30:"Trigésimo",31:"Trigésimo PRIMERA",32:"Trigésimo SEGUNDA",33:"Trigésimo TERCERA",34:"Trigésimo CUARTA",35:"Trigésimo QUINTA",36:"Trigésimo SEXTA",37:"Trigésimo SÉPTIMA",38:"Trigésimo OCTAVA",39:"Trigésimo NOVENA",40:"Cuadragésimo",41:"Cuadragésimo PRIMERA",42:"Cuadragésimo SEGUNDA",43:"Cuadragésimo TERCERA",44:"Cuadragésimo CUARTA",45:"Cuadragésimo QUINTA",46:"Cuadragésimo SEXTA",47:"Cuadragésimo SÉPTIMA",48:"Cuadragésimo OCTAVA",49:"Cuadragésimo NOVENA",50:"Quincuagésimo",51:"Quincuagésimo PRIMERA",52:"Quincuagésimo SEGUNDA",53:"Quincuagésimo TERCERA",54:"Quincuagésimo CUARTA",55:"Quincuagésimo QUINTA",56:"Quincuagésimo SEXTA",57:"Quincuagésimo SÉPTIMA",58:"Quincuagésimo OCTAVA",59:"Quincuagésimo NOVENA",60:"Sexagésimo",61:"Sexagésimo PRIMERA",62:"Sexagésimo SEGUNDA",63:"Sexagésimo TERCERA",64:"Sexagésimo CUARTA",65:"Sexagésimo QUINTA",66:"Sexagésimo SEXTA",67:"Sexagésimo SÉPTIMA",68:"Sexagésimo OCTAVA",69:"Sexagésimo NOVENA",70:"Septuagésimo",71:"Septuagésimo PRIMERA",72:"Septuagésimo SEGUNDA",73:"Septuagésimo TERCERA",74:"Septuagésimo CUARTA",75:"Septuagésimo QUINTA",76:"Septuagésimo SEXTA",77:"Septuagésimo SÉPTIMA",78:"Septuagésimo OCTAVA",79:"Septuagésimo NOVENA",80:"Octogésimo",81:"Octogésimo PRIMERA",82:"Octogésimo SEGUNDA",83:"Octogésimo TERCERA",84:"Octogésimo CUARTA",85:"Octogésimo QUINTA",86:"Octogésimo SEXTA",87:"Octogésimo SÉPTIMA",88:"Octogésimo OCTAVA",89:"Octogésimo NOVENA",90:"Nonagésimo",91:"Nonagésimo PRIMERA",92:"Nonagésimo SEGUNDA",93:"Nonagésimo TERCERA",94:"Nonagésimo CUARTA",95:"Nonagésimo QUINTA",96:"Nonagésimo SEXTA",97:"Nonagésimo SÉPTIMA",98:"Nonagésimo OCTAVA",99:"Nonagésimo NOVENA",100:"Centésimo"}; 


const spanish_alphbet = {1:"a", 2:"b", 3:"c",4:"d",5:"e",6:"f",7:"g",8:"h",9:"i",10:"j",11:"k",12:"l",13:"m",14:"n",15:"o",16:"p",17:"q",18:"r",19:"s",20:"t",21:"u",22:"v",23:"w",24:"x",25:"y",26:"z"}; 

const roman_count = {1:"	I", 2:"II", 3:"III",4:"IV",5:"V",6:"VI",7:"VII",8:"VIII",9:"IX",10:"X",11:"XI",12:"XII",13:"XIII",14:"XIV",15:"XV",16:"XVI",17:"XVII",18:"XVIII",19:"X IX",20:"XX",21:"XXI",22:"XXII",23:"XXIII",24:"XXIV",25:"XXV",26:"XXVI",27:"XXVII",28:"XXVIII",29:"XXIX",30:"XXX",31:"XXXI",32:"XXXII",33:"XXXIII",34:"XXXIV",35:"XXX V",36:"XXXVI",37:"XXXVII",38:"XXXVIII",39:"XXXIX",40:"XL",41:"XLI",42:"XLII",43:"XLIII",44:"XLIV",45:"XLV",46:"XLVI",47:"XLVII",48:"XLVIII",49:"XLIX",50:"L",51:"LI",52:"LII",53:"LIII",54:"LIV",55:"LV",56:"LVI",57:"LVII",58:"LVIII",59:"LIX",60:"LX",61:"LXI",62:"LXII",63:"LXIII",64:"LXIV",65:"LXV",66:"LXVI",67:"LXVII",68:"LXVIII",69:"LXIX",70:"LXX",71:"LXXI",72:"LXXII",73:"LXXIII",74:"LXXIV",75:"LXXV",76:"LXXVI",77:"LXXVII",78:"LXXVIII",79:"LXXIX",80:"LXXX",81:"LXXXI",82:"LXXXII",83:"LXXXIII",84:"LXXXIV",85:"LXXXV",86:"LXXXVI",87:"LXXXVII",88:"LXXXVIII",89:"LXXXIX",90:"XC",91:"XCI",92:"XCII",93:"XCIII",94:"XCIV",95:"XCV",96:"XCVI",97:"XCVII",98:"XCVIII",99:"XCIX",100:"C"}; 

jQuery(document).ready(function($){
	change_document_value = function(id){
		var target_value = $('#'+id).val();
		if(target_value == '' || target_value == null || target_value == 'undefiend'){
		    var default_val = $('#'+id).attr('data-placeholdertext');
		    if(default_val == '' || default_val == null || default_val == 'undefiend'){
			   var target_value = '___________';
			}else{
				 var target_value = default_val;
			} 		   
		}
	   
	   if($('#'+id).is('textarea')){
			target_value = target_value.replace(/\r\n|\r|\n/g,"<br/>");
		   $('span[target-id="target_'+id+'"]').html(target_value);
		   $('span[target-id="target_'+id+'"]').each(function(){
			   $(this).html(target_value);
		   }); 
		}else{
		   $('span[target-id="target_'+id+'"]').html(target_value);
		   $('span[target-id="target_'+id+'"]').each(function(){
			   $(this).html(target_value);
		   });
		}
	  /* $('span[target-id="target_'+id+'"]').html(target_value);
	   $('span[target-id="target_'+id+'"]').each(function(){
		   $(this).html(target_value);
	   });*/
	   //$('#'+id).attr('value',target_value);  
		if($('#'+id).is('select')){
			if($('span[target-id="target_'+id+'"]').length ){
				var pe = 1;
				$('span[target-id="target_'+id+'"]').each(function(){
					$(this).removeClass('scrolled');
					if(!$(this).hasClass('scrolled') && !$(this).parent().hasClass('hide') && pe == 1){
						if($(window).width() > 767 ){
							$('#cotract-full-document').animate({
								'scrollTop' : $('#cotract-full-document').scrollTop() + $(this).position().top-100
							},1000);
						}else{
							$('.html-pdf-document-cont').animate({
								'scrollTop' : $('.html-pdf-document-cont').scrollTop() + $(this).position().top-50
							},1000);
						}				
						//$(this).addClass('scrolled');
						pe = 2;
					}
				});
			}
		}else{
			if($('span[target-id="target_'+id+'"]').length ){
				var pe = 1;
				$('span[target-id="target_'+id+'"]').each(function(){
					if(!$(this).hasClass('scrolled') && !$(this).parent().hasClass('hide') && pe == 1){
						if($(window).width() > 767 ){
							$('#cotract-full-document').animate({
								'scrollTop' : $('#cotract-full-document').scrollTop() + $(this).position().top-100
							},1000);
						}else{
							$('.html-pdf-document-cont').animate({
								'scrollTop' : $('.html-pdf-document-cont').scrollTop() + $(this).position().top-50
							},1000);
						}				
						$(this).addClass('scrolled');
						pe = 2;
					}
				});
			}
		}
		
		

		if(!$('#'+id).is('select') && !$('#'+id).is(':radio')){
			$('.check_condition_element.'+id).each(function(){
				var dataconditions =  $(this).attr('data-condition');
				var arr = $.parseJSON(dataconditions);
				var show_element = 'yes';
				$.each(arr,function(key,value){
					var qus_id = value.question_id;
					var qus_val = value.question_value;
					var condition = value.condition;
					if($('#'+qus_id).length){
						if(condition == '='){
							if($('#'+qus_id).val() == qus_val &&  show_element == 'yes'){
								show_element = 'yes';
							}else{
							   show_element = 'no';	
							}
						}else if(condition == '>'){
							if($('#'+qus_id).val() > qus_val && show_element == 'yes'){
								show_element = 'yes';
							}else{
							   show_element = 'no';	
							}
						}else if(condition == '<'){
							if($('#'+qus_id).val() < qus_val && show_element == 'yes'){
								show_element = 'yes';
							}else{
							   show_element = 'no';	
							}
						}else if(condition == '!='){
							if($('#'+qus_id).val() != qus_val && show_element == 'yes'){
								show_element = 'yes';
							}else{
							   show_element = 'no';	
							}
						}	
					}else if($('input[type="radio"][name="'+qus_id+'"]').length){
						if(condition == '='){
							if($('input[type="radio"][name="'+qus_id+'"]:checked').val() == qus_val && show_element == 'yes'){
								show_element = 'yes';
							}else{
							   show_element = 'no';	
							}
						}else if(condition == '>'){
							if($('input[type="radio"][name="'+qus_id+'"]:checked').val() > qus_val && show_element == 'yes'){
								show_element = 'yes';
							}else{
							   show_element = 'no';	
							}
						}else if(condition == '<'){
							if($('input[type="radio"][name="'+qus_id+'"]:checked').val() < qus_val && show_element == 'yes'){
								show_element = 'yes';
							}else{
							   show_element = 'no';	
							}
						}else if(condition == '!='){
							if($('input[type="radio"][name="'+qus_id+'"]:checked').val() != qus_val && show_element == 'yes'){
								show_element = 'yes';
							}else{
							   show_element = 'no';	
							}
						}
					}						
				});
				if(show_element == 'yes'){
					$(this).removeClass('hide');
				}else{
					$(this).addClass('hide');
				}
			});
		}
		
		if($('.heading_listing').length){
			setTimeout(function(){
			var pr = 1;
				$('.heading_listing').each(function(){
					if($(this).closest('.check_condition_element').length > 0 && !$(this).closest('.check_condition_element').hasClass('hide')){   
						var listincount = spanish_count[pr];
						$(this).html(listincount.toUpperCase());
						pr++;
					}else if($(this).closest('.check_condition_element').length > 0 && $(this).closest('.check_condition_element').hasClass('hide')){
						
					}else if(!$(this).closest('span').hasClass('hide')){
						var listincount = spanish_count[pr];
						$(this).html(listincount.toUpperCase());
						pr++;
					}else{
						var listincount = spanish_count[pr];
						$(this).html(listincount.toUpperCase());
						pr++;
					}
				}); 
			},800);
		}
		
		if($('.abclist').length){
			setTimeout(function(){
				var pr = 1;
				for(var list = 1;list <= 10; list++){
					if($('.abclist_'+list).length){
						var prl = 1;
						$('.abclist_'+list).each(function(){
							if($(this).closest('.check_condition_element').length > 0 && !$(this).closest('.check_condition_element').hasClass('hide')){   
								$(this).html(spanish_alphbet[prl]);
								prl++;
							}else if($(this).closest('.check_condition_element').length > 0 && $(this).closest('.check_condition_element').hasClass('hide')){
								
							}else if(!$(this).closest('span').hasClass('hide')){
								$(this).html(spanish_alphbet[prl]);
								prl++;
							}else{
								$(this).html(spanish_alphbet[prl]);
								prl++;
							}
							if(prl ==26){
								prl = 1;
							}
						});	
					}
				}
			},800);	
		}
		
		if($('.romlist').length){
			setTimeout(function(){
				for(var list = 1;list <= 10; list++){
					if($('.romlist_'+list).length){
						var prl = 1;
						$('.romlist_'+list).each(function(){
							if($(this).closest('.check_condition_element').length > 0 && !$(this).closest('.check_condition_element').hasClass('hide')){   
								$(this).html(roman_count[prl]);
								prl++;
							}else if($(this).closest('.check_condition_element').length > 0 && $(this).closest('.check_condition_element').hasClass('hide')){
								
							}else if(!$(this).closest('span').hasClass('hide')){
								$(this).html(roman_count[prl]);
								prl++;
							}else{
								$(this).html(roman_count[prl]);
								prl++;
							}
							if(prl ==26){
								prl = 1;
							} 
						});	
					}
				}
			},800);		
		}		
    } 
	
	change_radio_value = function(id){
		var name = $('#'+id).attr('name');
		var target_value  = $('#'+id).val();
		$('span[target-id="target_'+name+'"]').html(target_value);
		$('span[target-id="target_'+name+'"]').each(function(){
		   $(this).html(target_value);
		}); 
		
		if($('span[target-id="target_'+name+'"]').length ){
			var pe = 1;
			$('span[target-id="target_'+name+'"]').each(function(){
				$(this).removeClass('scrolled');
				if(!$(this).hasClass('scrolled') && !$(this).parent().hasClass('hide') && pe == 1){
					if($(window).width() > 767 ){
						$('#cotract-full-document').animate({
							'scrollTop' : $('#cotract-full-document').scrollTop() + $(this).position().top-100
						},1000);
					}else{
						$('.html-pdf-document-cont').animate({
							'scrollTop' : $('.html-pdf-document-cont').scrollTop() + $(this).position().top-100
						},1000);
					}				
					//$(this).addClass('scrolled');
					pe = 2;
				}
			});
		}

		$('.check_condition_element.'+name).each(function(){
			var dataconditions =  $(this).attr('data-condition');
			var arr = $.parseJSON(dataconditions);
			var show_element = 'yes';
			$.each(arr,function(key,value){
				var qus_id = value.question_id;
				var qus_val = value.question_value;
				var condition = value.condition;
				if($('#'+qus_id).length){
					if(condition == '='){
						if($('#'+qus_id).val() == qus_val &&  show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}else if(condition == '>'){
						if($('#'+qus_id).val() > qus_val && show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}else if(condition == '<'){
						if($('#'+qus_id).val() < qus_val && show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}else if(condition == '!='){
						if($('#'+qus_id).val() != qus_val && show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}	
				}else if($('input[type="radio"][name="'+qus_id+'"]').length){
					if(condition == '='){
						if($('input[type="radio"][name="'+qus_id+'"]:checked').val() == qus_val && show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}else if(condition == '>'){
						if($('input[type="radio"][name="'+qus_id+'"]:checked').val() > qus_val && show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}else if(condition == '<'){
						if($('input[type="radio"][name="'+qus_id+'"]:checked').val() < qus_val && show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}else if(condition == '!='){
						if($('input[type="radio"][name="'+qus_id+'"]:checked').val() != qus_val && show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}
				}						
			});
			if(show_element == 'yes'){
				$(this).removeClass('hide');
			}else{
				$(this).addClass('hide');
			}
		});	
		
		if($('.heading_listing').length){
			setTimeout(function(){
				var pr = 1;
				$('.heading_listing').each(function(){
					if($(this).closest('.check_condition_element').length > 0 && !$(this).closest('.check_condition_element').hasClass('hide')){   
						var listincount = spanish_count[pr];
						$(this).html(listincount.toUpperCase());
						pr++;
					}else if($(this).closest('.check_condition_element').length > 0 && $(this).closest('.check_condition_element').hasClass('hide')){
						
					}else if(!$(this).closest('span').hasClass('hide')){
						var listincount = spanish_count[pr];
						$(this).html(listincount.toUpperCase());
						pr++;
					}else{
						var listincount = spanish_count[pr];
						$(this).html(listincount.toUpperCase());
						pr++;
					}
				}); 
			},800);
		}
		if($('.abclist').length){
			setTimeout(function(){
				var pr = 1;
				for(var list = 1;list <= 10; list++){
					if($('.abclist_'+list).length){
						var prl = 1;
						$('.abclist_'+list).each(function(){
							if($(this).closest('.check_condition_element').length > 0 && !$(this).closest('.check_condition_element').hasClass('hide')){   
								$(this).html(spanish_alphbet[prl]);
								prl++;
							}else if($(this).closest('.check_condition_element').length > 0 && $(this).closest('.check_condition_element').hasClass('hide')){
								
							}else if(!$(this).closest('span').hasClass('hide')){
								$(this).html(spanish_alphbet[prl]);
								prl++;
							}else{
								$(this).html(spanish_alphbet[prl]);
								prl++;
							}
							if(prl ==26){
								prl = 1;
							}
						});	
					}
				}
			},800);	
		}
		
		if($('.romlist').length){
			setTimeout(function(){
				for(var list = 1;list <= 10; list++){
					if($('.romlist_'+list).length){
						var prl = 1;
						$('.romlist_'+list).each(function(){
							if($(this).closest('.check_condition_element').length > 0 && !$(this).closest('.check_condition_element').hasClass('hide')){   
								$(this).html(roman_count[prl]);
								prl++;
							}else if($(this).closest('.check_condition_element').length > 0 && $(this).closest('.check_condition_element').hasClass('hide')){
								
							}else if(!$(this).closest('span').hasClass('hide')){
								$(this).html(roman_count[prl]);
								prl++;
							}else{
								$(this).html(roman_count[prl]);
								prl++;
							}
							if(prl ==26){
								prl = 1;
							} 
						});	
					}
				}
			},800);		
		}
		
		
	} 
	
	change_price_document_value = function(id){
		var target_value = $('#'+id).val().replace(/[^0-9\.\,]/g,'');
		var p = $('#'+id).val().replace(/[^0-9\.]/g,'');	
		$('#'+id).val(numberWithCommas(p));
		var price_inword = '_______';
		
		if(target_value != '' && target_value != null && target_value != 'undefiend'){
			var valp = $('#'+id).val().replace(/[^0-9\.]/g,'');
			var decimal = getDecimalPart(valp);
			if(decimal == 0){	 
				target_value = valp;
				price_inword = $.spellingNumber(valp, {lang:"es",digitsLengthW2F: 2,decimalSeperator:"punto"});
				price_inword = (price_inword).trim();
			}else{
				target_value = parseFloat(valp).toFixed(2);
				price_inword = $.spellingNumber(target_value, {lang:"es",digitsLengthW2F: 2,decimalSeperator:"punto"});
				price_inword = (price_inword).trim();
			}
			
			target_value = numberWithCommas(target_value);   
		}else{
			var target_value = '_________';
		}  
		
		
	   
		$('span[target-id="target_'+id+'"]').html(target_value);
		$('span[target-id="target_'+id+'"]').each(function(){
		   $(this).html(target_value);
		}); 
		$('span[target-price-id="target_'+id+'"]').each(function(){
		   $(this).html(price_inword);
		});
		
		$('span.target_calculation.target_'+id).each(function(){
		   var first_id = $(this).attr('data-first');
		   var second_id = $(this).attr('data-second');		   
		   if($('#'+first_id).val() != '' && $('#'+first_id).val() != null && $('#'+first_id).val() != 'undefiend' && $('#'+second_id).val() != '' && $('#'+second_id).val() != null && $('#'+second_id).val() != 'undefiend'){
				var first_value = $('#'+first_id).val().replace(/[^0-9\.]/g,'');
				var second_value = $('#'+second_id).val().replace(/[^0-9\.]/g,'');
				var calculate = 0;
				var calculation_inword = '';
				if($(this).hasClass('add')){
				   var calculate = parseFloat(first_value) + parseFloat(second_value);
				}else if($(this).hasClass('sub')){
				   var calculate = parseFloat(first_value) - parseFloat(second_value);
				}else if($(this).hasClass('multi')){
				   var calculate = parseFloat(first_value) * parseFloat(second_value);
				}else if($(this).hasClass('divi')){
				   var calculate = parseFloat(first_value) / parseFloat(second_value);
				}
				
				var decimal = getDecimalPart(calculate);
				if(decimal == 0){	 
					calculation_inword = $.spellingNumber(calculate, {lang:"es",digitsLengthW2F: 2,decimalSeperator:"punto"});
					calculation_inword = (price_inword).trim();
				}else{
					calculate = parseFloat(calculate).toFixed(2);
					calculation_inword = $.spellingNumber(calculate, {lang:"es",digitsLengthW2F: 2,decimalSeperator:"punto"});
					calculation_inword = (price_inword).trim();
				}				
				calculate = numberWithCommas(calculate);   
				$(this).html(calculate);  
				//$(this).html(calculate+'('+calculation_inword+')'); 
			}else{
				var calculate = '_________';
				$(this).html(calculate);
			}
		});
		
		$('span.target_pcalculation.target_'+id).each(function(){
		   var first_id = $(this).attr('data-first');
		   var second_id = $(this).attr('data-second');		   
		   if($('#'+first_id).val() != '' && $('#'+first_id).val() != null && $('#'+first_id).val() != 'undefiend' && $('#'+second_id).val() != '' && $('#'+second_id).val() != null && $('#'+second_id).val() != 'undefiend'){
				var first_value = $('#'+first_id).val().replace(/[^0-9\.]/g,'');
				var second_value = $('#'+second_id).val().replace(/[^0-9\.]/g,'');
				var calculate = 0;
				var calculation_inword = '_________';
				if($(this).hasClass('add')){
				   var calculate = parseFloat(first_value) + parseFloat(second_value);
				}else if($(this).hasClass('sub')){
				   var calculate = parseFloat(first_value) - parseFloat(second_value);
				}else if($(this).hasClass('multi')){
				   var calculate = parseFloat(first_value) * parseFloat(second_value);
				}else if($(this).hasClass('divi')){
				   var calculate = parseFloat(first_value) / parseFloat(second_value);
				}
				
				var decimal = getDecimalPart(calculate);
				if(decimal == 0){	 
					calculation_inword = $.spellingNumber(calculate, {lang:"es",digitsLengthW2F: 2,decimalSeperator:"punto"});
					calculation_inword = (calculation_inword).trim();
				}else{
					calculate = parseFloat(calculate).toFixed(2);
					calculation_inword = $.spellingNumber(calculate, {lang:"es",digitsLengthW2F: 2,decimalSeperator:"punto"});
					calculation_inword = (calculation_inword).trim();
				}				
				//calculate = numberWithCommas(calculate);   
				$(this).html(calculation_inword);  
				//$(this).html(calculate+'('+calculation_inword+')'); 
			}else{
				var calculate = '_________';
				$(this).html(calculate);
			} 
		});		
		
		
		
	   //$('#'+id).attr('value',target_value); 
		if($('span[target-id="target_'+id+'"]').length ){
			var pe = 1;
			$('span[target-id="target_'+id+'"]').each(function(){
				if(!$(this).hasClass('scrolled') && !$(this).parent().hasClass('hide') && pe == 1){
					if($(window).width() > 767 ){
						$('#cotract-full-document').animate({
							'scrollTop' : $('#cotract-full-document').scrollTop() + $(this).position().top-100
						},1000);
					}else{
						$('.html-pdf-document-cont').animate({
							'scrollTop' : $('.html-pdf-document-cont').scrollTop() + $(this).position().top-100
						},1000);
					}
					$(this).addClass('scrolled');
					pe = 2;
				}
			});
		}
		
		
		$('.check_condition_element.'+id).each(function(){
			var dataconditions =  $(this).attr('data-condition');
			var arr = $.parseJSON(dataconditions);
			var show_element = 'yes';
			$.each(arr,function(key,value){
				var qus_id = value.question_id;
				var qus_val = value.question_value;
				var condition = value.condition;
				if($('#'+qus_id).length){
					if(condition == '='){
						if($('#'+qus_id).val() == qus_val &&  show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}else if(condition == '>'){
						if($('#'+qus_id).val() > qus_val && show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}else if(condition == '<'){
						if($('#'+qus_id).val() < qus_val && show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}else if(condition == '!='){
						if($('#'+qus_id).val() != qus_val && show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}	
				}else if($('input[type="radio"][name="'+qus_id+'"]').length){
					if(condition == '='){
						if($('input[type="radio"][name="'+qus_id+'"]:checked').val() == qus_val && show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}else if(condition == '>'){
						if($('input[type="radio"][name="'+qus_id+'"]:checked').val() > qus_val && show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}else if(condition == '<'){
						if($('input[type="radio"][name="'+qus_id+'"]:checked').val() < qus_val && show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}else if(condition == '!='){
						if($('input[type="radio"][name="'+qus_id+'"]:checked').val() != qus_val && show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}
				}						
			});
			if(show_element == 'yes'){
				$(this).removeClass('hide');
			}else{
				$(this).addClass('hide');
			}
		});
		
		if($('.heading_listing').length){
			setTimeout(function(){
			var pr = 1;
				$('.heading_listing').each(function(){
					if($(this).closest('.check_condition_element').length > 0 && !$(this).closest('.check_condition_element').hasClass('hide')){   
						var listincount = spanish_count[pr];
						$(this).html(listincount.toUpperCase());
						pr++;
					}else if($(this).closest('.check_condition_element').length > 0 && $(this).closest('.check_condition_element').hasClass('hide')){
						
					}else if(!$(this).closest('span').hasClass('hide')){
						var listincount = spanish_count[pr];
						$(this).html(listincount.toUpperCase());
						pr++;
					}else{
						var listincount = spanish_count[pr];
						$(this).html(listincount.toUpperCase());
						pr++;
					}
				}); 
			},800);
		}
		
		if($('.abclist').length){
			setTimeout(function(){
				var pr = 1;
				for(var list = 1;list <= 10; list++){
					if($('.abclist_'+list).length){
						var prl = 1;
						$('.abclist_'+list).each(function(){
							if($(this).closest('.check_condition_element').length > 0 && !$(this).closest('.check_condition_element').hasClass('hide')){   
								$(this).html(spanish_alphbet[prl]);
								prl++;
							}else if($(this).closest('.check_condition_element').length > 0 && $(this).closest('.check_condition_element').hasClass('hide')){
								
							}else if(!$(this).closest('span').hasClass('hide')){
								$(this).html(spanish_alphbet[prl]);
								prl++;
							}else{
								$(this).html(spanish_alphbet[prl]);
								prl++;
							}
							if(prl ==26){
								prl = 1;
							}
						});	
					}
				}
			},800);	
		}
		
		if($('.romlist').length){
			setTimeout(function(){
				for(var list = 1;list <= 10; list++){
					if($('.romlist_'+list).length){
						var prl = 1;
						$('.romlist_'+list).each(function(){
							if($(this).closest('.check_condition_element').length > 0 && !$(this).closest('.check_condition_element').hasClass('hide')){   
								$(this).html(roman_count[prl]);
								prl++;
							}else if($(this).closest('.check_condition_element').length > 0 && $(this).closest('.check_condition_element').hasClass('hide')){
								
							}else if(!$(this).closest('span').hasClass('hide')){
								$(this).html(roman_count[prl]);
								prl++;
							}else{
								$(this).html(roman_count[prl]);
								prl++;
							}
							if(prl ==26){
								prl = 1;
							} 
						});	
					}
				}
			},800);		
		}	
    } 
	

	change_number_document_value = function(id){ 
		var target_value = $('#'+id).val().replace(/[^0-9\.\,]/g,'');
		var p = $('#'+id).val().replace(/[^0-9\.]/g,'');	
		$('#'+id).val(numberWithCommas(p));
		//$('#'+id).val(target_value);
		var target_value = $('#'+id).val();
		var price_inword = '_______';
		
		if(target_value != '' && target_value != null && target_value != 'undefiend'){
			var valp = $('#'+id).val().replace(/[^0-9\.]/g,'');
			var decimal = getDecimalPart(valp);
			if(decimal == 0){
				target_value = valp;
				price_inword = $.spellingNumber(valp, {lang:"es",digitsLengthW2F: 2,decimalSeperator:"punto"});
				price_inword = (price_inword).trim();
			}else{
				target_value = parseFloat(valp).toFixed(2);
				price_inword = $.spellingNumber(target_value, {lang:"es",digitsLengthW2F: 2,decimalSeperator:"punto"});
				price_inword = (price_inword).trim();
			}
			target_value = numberWithCommas(target_value);  
			var span_value = target_value+' ('+price_inword+')';
		}else{
			var span_value = '_________';
			var target_value = '_________';
		} 
		   
		$('span[target-id="target_'+id+'"]').html(target_value);
		$('span[target-id="target_'+id+'"]').each(function(){
		   $(this).html(target_value);
		});

		$('span[target-number-id="target_'+id+'"]').each(function(){
		   $(this).html(price_inword);
		}); 
		
		$('span.target_calculation.target_'+id).each(function(){
		   var first_id = $(this).attr('data-first');
		   var second_id = $(this).attr('data-second');		   
		   if(($('#'+first_id).val() != '' && $('#'+first_id).val() != null && $('#'+first_id).val() != 'undefiend') || ($('#'+second_id).val() != '' && $('#'+second_id).val() != null && $('#'+second_id).val() != 'undefiend')){
				var first_value = 0;
				var second_value = 0;
				if($('#'+first_id).val() != '' && $('#'+first_id).val() != null && $('#'+first_id).val() != 'undefiend'){
					first_value = $('#'+first_id).val().replace(/[^0-9\.]/g,'');
				}
				
				if($('#'+second_id).val() != '' && $('#'+second_id).val() != null && $('#'+second_id).val() != 'undefiend'){
					second_value = $('#'+second_id).val().replace(/[^0-9\.]/g,'');
				}

				var calculate = 0;
				var calculation_inword = '';
				if($(this).hasClass('add')){
				   var calculate = parseFloat(first_value) + parseFloat(second_value);
				}else if($(this).hasClass('sub')){
				   var calculate = parseFloat(first_value) - parseFloat(second_value);
				}else if($(this).hasClass('multi')){
				   var calculate = parseFloat(first_value) * parseFloat(second_value);
				}else if($(this).hasClass('divi')){
				   var calculate = parseFloat(first_value) / parseFloat(second_value);
				}
				
				var decimal = getDecimalPart(calculate);
				if(decimal == 0){	 
					calculation_inword = $.spellingNumber(calculate, {lang:"es",digitsLengthW2F: 2,decimalSeperator:"punto"});
					calculation_inword = (price_inword).trim();
				}else{
					calculate = parseFloat(calculate).toFixed(2);
					calculation_inword = $.spellingNumber(calculate, {lang:"es",digitsLengthW2F: 2,decimalSeperator:"punto"});
					calculation_inword = (price_inword).trim();
				}				
				calculate = numberWithCommas(calculate);   
				$(this).html(calculate);  
				//$(this).html(calculate+'('+calculation_inword+')'); 
			}else{
				var calculate = '_________';
				$(this).html(calculate);
			}
		});
		
		$('span.target_pcalculation.target_'+id).each(function(){
		   var first_id = $(this).attr('data-first');
		   var second_id = $(this).attr('data-second');		   
		  if(($('#'+first_id).val() != '' && $('#'+first_id).val() != null && $('#'+first_id).val() != 'undefiend') || ($('#'+second_id).val() != '' && $('#'+second_id).val() != null && $('#'+second_id).val() != 'undefiend')){
				var first_value = 0;
				var second_value = 0;
				if($('#'+first_id).val() != '' && $('#'+first_id).val() != null && $('#'+first_id).val() != 'undefiend'){
					first_value = $('#'+first_id).val().replace(/[^0-9\.]/g,'');
				}				
				if($('#'+second_id).val() != '' && $('#'+second_id).val() != null && $('#'+second_id).val() != 'undefiend'){
					second_value = $('#'+second_id).val().replace(/[^0-9\.]/g,'');
				}
				var calculate = 0;
				var calculation_inword = '_________';
				if($(this).hasClass('add')){
				   var calculate = parseFloat(first_value) + parseFloat(second_value);
				}else if($(this).hasClass('sub')){
				   var calculate = parseFloat(first_value) - parseFloat(second_value);
				}else if($(this).hasClass('multi')){
				   var calculate = parseFloat(first_value) * parseFloat(second_value);
				}else if($(this).hasClass('divi')){
				   var calculate = parseFloat(first_value) / parseFloat(second_value);
				}
				
				var decimal = getDecimalPart(calculate);
				if(decimal == 0){	 
					calculation_inword = $.spellingNumber(calculate, {lang:"es",digitsLengthW2F: 2,decimalSeperator:"punto"});
					calculation_inword = (calculation_inword).trim();
				}else{
					calculate = parseFloat(calculate).toFixed(2);
					calculation_inword = $.spellingNumber(calculate, {lang:"es",digitsLengthW2F: 2,decimalSeperator:"punto"});
					calculation_inword = (calculation_inword).trim();
				}				
				//calculate = numberWithCommas(calculate);   
				$(this).html(calculation_inword);  
				//$(this).html(calculate+'('+calculation_inword+')'); 
			}else{
				var calculate = '_________';
				$(this).html(calculate);
			} 
		});	
		
	   //$('#'+id).attr('value',target_value); 
		if($('span[target-id="target_'+id+'"]').length ){
			var pe = 1;
			$('span[target-id="target_'+id+'"]').each(function(){
				if(!$(this).hasClass('scrolled') && !$(this).parent().hasClass('hide') && pe == 1){
					if($(window).width() > 767 ){
						$('#cotract-full-document').animate({
							'scrollTop' : $('#cotract-full-document').scrollTop() + $(this).position().top-100
						},1000);
					}else{
						$('.html-pdf-document-cont').animate({
							'scrollTop' : $('.html-pdf-document-cont').scrollTop() + $(this).position().top-100
						},1000);
					}
					$(this).addClass('scrolled');
					pe = 2;
				}
			});
		}
		
		$('.check_condition_element.'+id).each(function(){
			var dataconditions =  $(this).attr('data-condition');
			var arr = $.parseJSON(dataconditions);
			var show_element = 'yes';
			$.each(arr,function(key,value){
				var qus_id = value.question_id;
				var qus_val = value.question_value;
				var condition = value.condition;
				if($('#'+qus_id).length){
					if(condition == '='){
						if($('#'+qus_id).val() == qus_val &&  show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}else if(condition == '>'){
						if($('#'+qus_id).val() > qus_val && show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}else if(condition == '<'){
						if($('#'+qus_id).val() < qus_val && show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}else if(condition == '!='){
						if($('#'+qus_id).val() != qus_val && show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}	
				}else if($('input[type="radio"][name="'+qus_id+'"]').length){
					if(condition == '='){
						if($('input[type="radio"][name="'+qus_id+'"]:checked').val() == qus_val && show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}else if(condition == '>'){
						if($('input[type="radio"][name="'+qus_id+'"]:checked').val() > qus_val && show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}else if(condition == '<'){
						if($('input[type="radio"][name="'+qus_id+'"]:checked').val() < qus_val && show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}else if(condition == '!='){
						if($('input[type="radio"][name="'+qus_id+'"]:checked').val() != qus_val && show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}
				}						
			});
			if(show_element == 'yes'){
				$(this).removeClass('hide');
			}else{
				$(this).addClass('hide');
			}
		});
		
		if($('.heading_listing').length){
			setTimeout(function(){
			var pr = 1;
				$('.heading_listing').each(function(){
					if($(this).closest('.check_condition_element').length > 0 && !$(this).closest('.check_condition_element').hasClass('hide')){   
						var listincount = spanish_count[pr];
						$(this).html(listincount.toUpperCase());
						pr++;
					}else if($(this).closest('.check_condition_element').length > 0 && $(this).closest('.check_condition_element').hasClass('hide')){
						
					}else if(!$(this).closest('span').hasClass('hide')){
						var listincount = spanish_count[pr];
						$(this).html(listincount.toUpperCase());
						pr++;
					}else{
						var listincount = spanish_count[pr];
						$(this).html(listincount.toUpperCase());
						pr++;
					}
				}); 
			},800);
		}
		
		if($('.abclist').length){
			setTimeout(function(){
				var pr = 1;
				for(var list = 1;list <= 10; list++){
					if($('.abclist_'+list).length){
						var prl = 1;
						$('.abclist_'+list).each(function(){
							if($(this).closest('.check_condition_element').length > 0 && !$(this).closest('.check_condition_element').hasClass('hide')){   
								$(this).html(spanish_alphbet[prl]);
								prl++;
							}else if($(this).closest('.check_condition_element').length > 0 && $(this).closest('.check_condition_element').hasClass('hide')){
								
							}else if(!$(this).closest('span').hasClass('hide')){
								$(this).html(spanish_alphbet[prl]);
								prl++;
							}else{
								$(this).html(spanish_alphbet[prl]);
								prl++;
							}
							if(prl ==26){
								prl = 1;
							}
						});	
					}
				}
			},800);	
		}
		
		if($('.romlist').length){
			setTimeout(function(){
				for(var list = 1;list <= 10; list++){
					if($('.romlist_'+list).length){
						var prl = 1;
						$('.romlist_'+list).each(function(){
							if($(this).closest('.check_condition_element').length > 0 && !$(this).closest('.check_condition_element').hasClass('hide')){   
								$(this).html(roman_count[prl]);
								prl++;
							}else if($(this).closest('.check_condition_element').length > 0 && $(this).closest('.check_condition_element').hasClass('hide')){
								
							}else if(!$(this).closest('span').hasClass('hide')){
								$(this).html(roman_count[prl]);
								prl++;
							}else{
								$(this).html(roman_count[prl]);
								prl++;
							}
							if(prl ==26){
								prl = 1;
							} 
						});	
					}
				}
			},800);		
		}	
    }   
	
	function numberWithCommas(number) {
		var parts = number.toString().split(".");
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		return parts.join(".");
	}
	
	change_percentage_document_value = function(id){
		var target_value = $('#'+id).val().replace(/[^0-9\.]/g,'');
		$('#'+id).val(target_value);
		var target_value = $('#'+id).val();
		var price_inword = '_______';
		
		/* if(target_value != '' && target_value != null && target_value != 'undefiend'){
			price_inword = $.spellingNumber(target_value, {lang:"es",wholesUnit:"dollars",fractionUnit:"por ciento",digitsLengthW2F: 2,decimalSeperator:"punto"});
			var valp = parseFloat($('#'+id).val()).toFixed(2);
			var decimal = getDecimalPart(valp);
			if(decimal == 0){
				price_inword = price_inword;
			}else{
				price_inword = price_inword;
			}
		}else{
			var target_value = '_______';
		} */
		
		if(target_value != '' && target_value != null && target_value != 'undefiend'){
			var valp = $('#'+id).val().replace(/[^0-9\.]/g,'');
			var decimal = getDecimalPart(valp);
			if(decimal == 0){
				target_value = valp;
				price_inword = $.spellingNumber(valp, {lang:"es",digitsLengthW2F: 2,decimalSeperator:"punto"});
				//price_inword = $.spellingNumber(valp, {lang:"es",fractionUnit:"por ciento",digitsLengthW2F: 2,decimalSeperator:"punto"});
				price_inword = (price_inword).trim();
			}else{
				target_value = parseFloat(valp).toFixed(2);
				price_inword = $.spellingNumber(valp, {lang:"es",digitsLengthW2F: 2,decimalSeperator:"punto"});
				price_inword = (price_inword).trim();
			}
			target_value = numberWithCommas(target_value);  
		}else{
			var span_value = '_________';
			var target_value = '_________';
		} 
		
		    
		$('span[target-id="target_'+id+'"]').html(target_value);
		$('span[target-id="target_'+id+'"]').each(function(){
		   $(this).html(target_value);
		});
		
		//$('span[target-price-id="target_'+id+'"]').html(price_inword);
		$('span[target-price-id="target_'+id+'"]').each(function(){
		   $(this).html(price_inword);
		});
		
	   //$('#'+id).attr('value',target_value); 
		if($('span[target-id="target_'+id+'"]').length ){
			var pe = 1;
			$('span[target-id="target_'+id+'"]').each(function(){
				if(!$(this).hasClass('scrolled') && !$(this).parent().hasClass('hide') && pe == 1){
					if($(window).width() > 767 ){
						$('#cotract-full-document').animate({
							'scrollTop' : $('#cotract-full-document').scrollTop() + $(this).position().top-100
						},1000);
					}else{
						$('.html-pdf-document-cont').animate({
							'scrollTop' : $('.html-pdf-document-cont').scrollTop() + $(this).position().top-100
						},1000);
					}
					$(this).addClass('scrolled');
					pe = 2;
				}
			});
		}
		
		$('.check_condition_element.'+id).each(function(){
			var dataconditions =  $(this).attr('data-condition');
			var arr = $.parseJSON(dataconditions);
			var show_element = 'yes';
			$.each(arr,function(key,value){
				var qus_id = value.question_id;
				var qus_val = value.question_value;
				var condition = value.condition;
				if($('#'+qus_id).length){
					if(condition == '='){
						if($('#'+qus_id).val() == qus_val &&  show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}else if(condition == '>'){
						if($('#'+qus_id).val() > qus_val && show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}else if(condition == '<'){
						if($('#'+qus_id).val() < qus_val && show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}else if(condition == '!='){
						if($('#'+qus_id).val() != qus_val && show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}	
				}else if($('input[type="radio"][name="'+qus_id+'"]').length){
					if(condition == '='){
						if($('input[type="radio"][name="'+qus_id+'"]:checked').val() == qus_val && show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}else if(condition == '>'){
						if($('input[type="radio"][name="'+qus_id+'"]:checked').val() > qus_val && show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}else if(condition == '<'){
						if($('input[type="radio"][name="'+qus_id+'"]:checked').val() < qus_val && show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}else if(condition == '!='){
						if($('input[type="radio"][name="'+qus_id+'"]:checked').val() != qus_val && show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}
				}						
			});
			if(show_element == 'yes'){
				$(this).removeClass('hide');
			}else{
				$(this).addClass('hide');
			}
		});
		
		if($('.heading_listing').length){
			setTimeout(function(){
			var pr = 1;
				$('.heading_listing').each(function(){
					if($(this).closest('.check_condition_element').length > 0 && !$(this).closest('.check_condition_element').hasClass('hide')){   
						var listincount = spanish_count[pr];
						$(this).html(listincount.toUpperCase());
						pr++;
					}else if($(this).closest('.check_condition_element').length > 0 && $(this).closest('.check_condition_element').hasClass('hide')){
						
					}else if(!$(this).closest('span').hasClass('hide')){
						var listincount = spanish_count[pr];
						$(this).html(listincount.toUpperCase());
						pr++;
					}else{
						var listincount = spanish_count[pr];
						$(this).html(listincount.toUpperCase());
						pr++;
					}
				}); 
			},800);
		}
		
		if($('.abclist').length){
			setTimeout(function(){
				var pr = 1;
				for(var list = 1;list <= 10; list++){
					if($('.abclist_'+list).length){
						var prl = 1;
						$('.abclist_'+list).each(function(){
							if($(this).closest('.check_condition_element').length > 0 && !$(this).closest('.check_condition_element').hasClass('hide')){   
								$(this).html(spanish_alphbet[prl]);
								prl++;
							}else if($(this).closest('.check_condition_element').length > 0 && $(this).closest('.check_condition_element').hasClass('hide')){
								
							}else if(!$(this).closest('span').hasClass('hide')){
								$(this).html(spanish_alphbet[prl]);
								prl++;
							}else{
								$(this).html(spanish_alphbet[prl]);
								prl++;
							}
							if(prl ==26){
								prl = 1;
							}
						});	
					}
				}
			},800);	
		}
		
		if($('.romlist').length){
			setTimeout(function(){
				for(var list = 1;list <= 10; list++){
					if($('.romlist_'+list).length){
						var prl = 1;
						$('.romlist_'+list).each(function(){
							if($(this).closest('.check_condition_element').length > 0 && !$(this).closest('.check_condition_element').hasClass('hide')){   
								$(this).html(roman_count[prl]);
								prl++;
							}else if($(this).closest('.check_condition_element').length > 0 && $(this).closest('.check_condition_element').hasClass('hide')){
								
							}else if(!$(this).closest('span').hasClass('hide')){
								$(this).html(roman_count[prl]);
								prl++;
							}else{
								$(this).html(roman_count[prl]);
								prl++;
							}
							if(prl ==26){
								prl = 1;
							} 
						});	
					}
				}
			},800);		
		}	
    }  
	
	
	function getDecimalPart(num) { 
		const decimalStr = num.toString().split('.')[1];
		if(decimalStr != null && decimalStr != 'NaN' && decimalStr != 'undefiend' && decimalStr != ''){
			return Number(decimalStr);
		}else{
			return  '00';
		}
	}
	
   	show_target_element_if_value_not_blank = function(id,target_id){
	   	var target_value = $('#'+id).val();
       	if(target_value != '' && target_value != null && target_value != 'undefiend'){
   		  $('#'+target_id).removeClass('hide');
  		}else{ 
       	  $('#'+target_id).addClass('hide');
       	}
   	}
	
    hide_contract_question_question = function(id){
       $('#'+id).closest('.question').addClass('hide');
    }
	
 	show_contract_question_question = function(id){
       $('#'+id).closest('.question').removeClass('hide');
       setTimeout(function(){
   		  $('#'+id).trigger('keyup');
       },100);       
    }
	
    change_document_element_id = function(prev_id,cureent_id){
       $('#'+prev_id).attr('id',cureent_id);
    }
    
	
	change_document_text_on_keyup = function(id,firstElement,secondElement,thirdElement,fourthElement,fifthElement,sixthElement,sevenElement,eightElement){
	 	firstElement = firstElement || '';
	 	secondElement = secondElement || '';
	 	thirdElement = thirdElement || '';
	 	fourthElement = fourthElement || '';
	 	fifthElement = fifthElement || '';
	 	sixthElement = sixthElement || '';
	 	sevenElement = sevenElement || '';
	 	eightElement = eightElement || '';
		
	 	var value  = $('#'+id).val();
	 	if(value == '' || value == null || value == 'undefiend'){
	 		value = '________';
			$('#'+id).attr('value','');
	 	}else{
			$('#'+id).attr('value',value);
		}
		
	 	if(firstElement != '' && firstElement != null && firstElement != 'undefiend'){
	 	   $('#'+firstElement).html(value);
	 	   $('#'+firstElement).attr('data-target',id);
	 	}	 
		
	 	if(secondElement != '' && secondElement != null && secondElement != 'undefiend'){
	 		$('#'+secondElement).html(value);
	 		$('#'+secondElement).attr('data-target',id);
	 	} 
		
		if(thirdElement != '' && thirdElement != null && thirdElement != 'undefiend'){
	 		$('#'+thirdElement).html(value);
	 		$('#'+thirdElement).attr('data-target',id);
	 	} 
		
		if(fourthElement != '' && fourthElement != null && fourthElement != 'undefiend'){
	 		$('#'+fourthElement).html(value);
	 		$('#'+fourthElement).attr('data-target',id);
	 	} 
		
		if(fifthElement != '' && fifthElement != null && fifthElement != 'undefiend'){
	 		$('#'+fifthElement).html(value);
	 		$('#'+fifthElement).attr('data-target',id);
	 	} 
		
		if(sixthElement != '' && sixthElement != null && sixthElement != 'undefiend'){
	 		$('#'+sixthElement).html(value);
	 		$('#'+sixthElement).attr('data-target',id);
	 	} 
		
		if(sevenElement != '' && sevenElement != null && sevenElement != 'undefiend'){
	 		$('#'+sevenElement).html(value);
	 		$('#'+sevenElement).attr('data-target',id);
	 	} 
		
		if(eightElement != '' && eightElement != null && eightElement != 'undefiend'){
	 		$('#'+eightElement).html(value);
	 		$('#'+eightElement).attr('data-target',id);
	 	} 
		
		if(firstElement != '' && firstElement != null && firstElement != 'undefiend'){
			if($('#target_'+id).length && !$('#'+firstElement).hasClass('scrolled')){
				$('#cotract-full-document').animate({
					'scrollTop' : $('#cotract-full-document').scrollTop() + $('#'+firstElement).position().top-100
				},1000); 
				$('#'+firstElement).addClass('scrolled');
			}
	 	}
    }

	$('textarea,input[type="text"],input[type="email"],input[type="number"]').change(function(){
		$('.scrolled').removeClass('scrolled');
	});  

    go_to_next_step = function(step,event){
    	event.preventDefault();
		var data_skip_steps = $('.main.document-main-div').attr('data-skip-steps');
		var dt_clicks = $('.main.document-main-div').attr('data-clicks');
	
		if(dt_clicks < data_skip_steps)
		{
			nw_dt_clicks =  parseInt(dt_clicks) + 1;
			$('.main.document-main-div').attr('data-clicks',nw_dt_clicks);
		}
		else
		{
			$('.main.document-main-div').attr('data-clicks',0);
		}

		if($('.step.active .next-step-section button.next-step').hasClass('same_contract_link_p') && $('#dropdown_link_section_select').val() != '' && $('#dropdown_link_section_select').val() != null && $('#dropdown_link_section_select').val() != 'undefiend'){
			window.location.href = $('#dropdown_link_section_select').val();
		}
		else
		{
		$('.check_condition_element.activesec').each(function(){
			$(this).removeClass('activesec');
		});
		var getcurrent_step = $('.step.active').attr('data-id').replace("step-", "");		
		var dataCondition = $('.step.active .next-step-section button.next-step').attr('data-condition');
		var dataStep =  $('.step.active .next-step-section button.next-step').attr('data-step');
		
		var sdataCondition = $('.step.active .next-step-section button.next-step').attr('data-another-condition');
		var sdataStep =  $('.step.active .next-step-section button.next-step').attr('data-another-step');
		

		
		$('label.label_question.label_qus_condion').each(function(){
			var json_data = $(this).attr('data-json');
			if(json_data){
				var label_id = $(this).attr('data-labelid');
				$(this).addClass('active_label');
				$.each($.parseJSON(json_data), function(idx, obj) {
					if($('#'+obj.question_id).length){
						if(obj.question_label != null && obj.question_id != null && obj.question_value != null && $('#'+obj.question_id).val() == obj.question_value){
							$('label.label_question.label_qus_condion[data-labelid="'+label_id+'"]').html(obj.question_label);
							$('label.label_question.label_qus_condion.active_label').removeClass('active_label');
						} 
					}else if($('input[name="'+obj.question_id+'"]').length){
						if(obj.question_label != null && obj.question_id != null && obj.question_value != null && $('input[name="'+obj.question_id+'"]:checked').val() == obj.question_value){
							$('label.label_question.label_qus_condion[data-labelid="'+label_id+'"]').html(obj.question_label);
							$('label.label_question.label_qus_condion.active_label').removeClass('active_label');
						}  
					}else{
						$('label.label_question.label_qus_condion.active_label').removeClass('active_label');
					}					
				});
				$('label.label_question.label_qus_condion.active_label').removeClass('active_label');  
			}
			
		});
		
		
		var show_element = 'yes';
		if(dataCondition != null && dataCondition != '' && dataCondition != 'undefiend' && dataStep != null && dataStep != '' && dataStep != 'undefiend'){
			var arr = $.parseJSON(dataCondition);
			$.each(arr,function(key,value){
				var qus_id = value.question_id;
				var qus_val = value.question_value;
				var condition = value.condition;
				if($('#'+qus_id).length){
					if(condition == '='){
						if($('#'+qus_id).val() == qus_val &&  show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}else if(condition == '>'){
						if($('#'+qus_id).val() > qus_val && show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}else if(condition == '<'){
						if($('#'+qus_id).val() < qus_val && show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}else if(condition == '!='){
						if($('#'+qus_id).val() != qus_val && show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}	
				}else if($('input[type="radio"][name="'+qus_id+'"]').length){
					if(condition == '='){
						if($('input[type="radio"][name="'+qus_id+'"]:checked').val() == qus_val && show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}else if(condition == '>'){
						if($('input[type="radio"][name="'+qus_id+'"]:checked').val() > qus_val && show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}else if(condition == '<'){
						if($('input[type="radio"][name="'+qus_id+'"]:checked').val() < qus_val && show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}else if(condition == '!='){
						if($('input[type="radio"][name="'+qus_id+'"]:checked').val() != qus_val && show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}
				}	
			});
			
			if(show_element == 'yes'){
				step = dataStep;
			}
		}
		
		
		if(sdataCondition != null && sdataCondition != '' && sdataCondition != 'undefiend' && sdataStep != null && sdataStep != '' && sdataStep != 'undefiend' && show_element == 'no'){
			show_element = 'yes';
			var arr = $.parseJSON(sdataCondition);
			var show_element = 'yes';
			$.each(arr,function(key,value){
				var qus_id = value.question_id;
				var qus_val = value.question_value;
				var condition = value.condition;
				if($('#'+qus_id).length){
					if(condition == '='){
						if($('#'+qus_id).val() == qus_val &&  show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}else if(condition == '>'){
						if($('#'+qus_id).val() > qus_val && show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}else if(condition == '<'){
						if($('#'+qus_id).val() < qus_val && show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}else if(condition == '!='){
						if($('#'+qus_id).val() != qus_val && show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}	
				}else if($('input[type="radio"][name="'+qus_id+'"]').length){
					if(condition == '='){
						if($('input[type="radio"][name="'+qus_id+'"]:checked').val() == qus_val && show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}else if(condition == '>'){
						if($('input[type="radio"][name="'+qus_id+'"]:checked').val() > qus_val && show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}else if(condition == '<'){
						if($('input[type="radio"][name="'+qus_id+'"]:checked').val() < qus_val && show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}else if(condition == '!='){
						if($('input[type="radio"][name="'+qus_id+'"]:checked').val() != qus_val && show_element == 'yes'){
							show_element = 'yes';
						}else{
						   show_element = 'no';	
						}
					}
				}	
			});
			
			if(show_element == 'yes'){
				step = sdataStep;
			}
				
		}
		
		
		if(show_element == 'yes'){
			
			$('.step[data-id="step-'+step+'"] .question').each(function(){
				if(!$(this).hasClass('active')){
					$(this).addClass('active');
				}
			});
			
			var prev_html = $('.main.document-main-div').html();
			var url = $('.main.document-main-div').attr('data-url');
			var documetn_id = $('.main.document-main-div').attr('data-id');
			//save_step_into_data_base(data,documetn_id,getcurrent_step);
			//setTimeout(function(){
				var documetn_id = $('.main.document-main-div').attr('data-id');
				$('.step.active').addClass('done');
				$('.step.active').removeClass('active');
				$('.step[data-id="step-'+step+'"]').removeClass('hide');
				$('.step[data-id="step-'+step+'"]').addClass('active');		
				$('.target-element.active').removeClass('active');
				$('.target-element').removeClass('target-element');
				var pe = 1;
				$('.step[data-id="step-'+step+'"] input').each(function(){
					if ($(this).is(':radio')) {
						var inputid = $(this).attr('name');
						$('span[target-id="target_'+inputid+'"]').each(function(){
							if(!$(this).hasClass('active')){
								$(this).addClass('target-element');
								$(this).addClass('active');
							}							
						});
						$('span.check_condition_element.'+inputid).each(function(){
							if(!$(this).hasClass('hide')){
								if(pe == 1){
									if($(window).width() > 767 ){
										$('#cotract-full-document').animate({
											'scrollTop' : $('#cotract-full-document').scrollTop() + $(this).position().top-100
										},1000);
									}else{
										$('.html-pdf-document-cont').animate({
											'scrollTop' : $('.html-pdf-document-cont').scrollTop() + $(this).position().top-100
										},1000);
									}
									pe = 2;
								}
								$(this).addClass('activesec');		
							}					
						});
					}else{
						var inputid = $(this).attr('id');
						$('span[target-id="target_'+inputid+'"]').each(function(){
							$(this).addClass('target-element');
							$(this).addClass('active');
							if(!$(this).hasClass('scrolled') && !$(this).closest('.check_condition_element').hasClass('hide') && pe == 1){
								if($(window).width() > 767 ){
									$('#cotract-full-document').animate({
										'scrollTop' : $('#cotract-full-document').scrollTop() + $(this).position().top-100
									},1000);
								}else{
									$('.html-pdf-document-cont').animate({
										'scrollTop' : $('.html-pdf-document-cont').scrollTop() + $(this).position().top-100
									},1000);
								}
								pe = 2;
							}
						});
					}					
				});
				
				$('.step[data-id="step-'+step+'"] select').each(function(){
					var inputid = $(this).attr('id');
					$('span[target-id="target_'+inputid+'"]').each(function(){
						$(this).addClass('target-element');
						$(this).addClass('active');
					});
					$('span.check_condition_element.'+inputid).each(function(){
						if(!$(this).hasClass('hide')){
							if(pe == 1){
								if($(window).width() > 767 ){
									$('#cotract-full-document').animate({
										'scrollTop' : $('#cotract-full-document').scrollTop() + $(this).position().top-100
									},1000);
								}else{
									$('.html-pdf-document-cont').animate({
										'scrollTop' : $('.html-pdf-document-cont').scrollTop() + $(this).position().top-100
									},1000);
								}
								pe = 2;
							}
							$(this).addClass('activesec');		
						}					
					});
				}); 
				
				$('.target-element.target-element-'+step).addClass('active');
				if($(window).width() <= 767){
					var height = $('.main.document-main-div').outerHeight();
					height =Math.round(parseFloat(height) + parseFloat(154));
					$('div.html-pdf-document-cont').css('height','calc(100vh - '+height+'px');
				}
				$('.step[data-id="step-'+step+'"] .next-step-section button.prev-step').attr("onclick","go_to_previous_step('"+getcurrent_step+"',event);");
				var savehtml = $('.contract-form-container').html();
				$('#hide_textarea').val(savehtml);
				var data = $('.main.document-main-div').html();	
				update_progress_bar();
				$('body .contract-form-section').append('<div class="contacto_loader_" id="loader_cs_id_"><span class="loaderp"></span></div>');  
				setTimeout(function(){
					if(dt_clicks == "2")
					{
						save_both_step_into_data_base(data,documetn_id,step,getcurrent_step,prev_html);
						var last_save_step = step;
						window.localStorage.setItem('last_saved_step',step);	
					}
					//save_step_into_data_base(data,documetn_id,step);
					history.pushState({href:url+"?step="+step,html:documetn_id}, "", url+"/?step="+step);	
					$('body .contract-form-section .contacto_loader_').remove();			
				},2000);  
				
			//},1500);
		}else{
			$('.step[data-id="step-'+step+'"] .question').each(function(){
				if(!$(this).hasClass('active')){
					$(this).addClass('active');
				} 
			});  
			var prev_html = $('.main.document-main-div').html();
			var url = $('.main.document-main-div').attr('data-url');
			var documetn_id = $('.main.document-main-div').attr('data-id');
			//window.localStorage.setItem('document_'+documetn_id+'_step_'+getcurrent_step,data);	
			//save_step_into_data_base(data,documetn_id,getcurrent_step);
			
			//setTimeout(function(){
				var documetn_id = $('.main.document-main-div').attr('data-id');
				$('.step.active').addClass('done');
				$('.step.active').removeClass('active');
				$('.step[data-id="step-'+step+'"]').removeClass('hide');
				$('.step[data-id="step-'+step+'"]').addClass('active');		
				$('.target-element.active').removeClass('active');
				$('.target-element').removeClass('target-element');
				var pe = 1;
				$('.step[data-id="step-'+step+'"] input').each(function(){
					if ($(this).is(':radio')) {
						var inputid = $(this).attr('name');
						$('span[target-id="target_'+inputid+'"]').each(function(){
							if(!$(this).hasClass('active')){
								$(this).addClass('target-element');
								$(this).addClass('active');
							}						 
						});
						$('span.check_condition_element.'+inputid).each(function(){
							if(!$(this).hasClass('hide')){
								if(pe == 1){
									if($(window).width() > 767 ){
										$('#cotract-full-document').animate({
											'scrollTop' : $('#cotract-full-document').scrollTop() + $(this).position().top-100
										},1000);
									}else{
										$('.html-pdf-document-cont').animate({
											'scrollTop' : $('.html-pdf-document-cont').scrollTop() + $(this).position().top-100
										},1000);
									}
									pe = 2;
								}
								$(this).addClass('activesec');		
							}				
						});

					}else{
						var inputid = $(this).attr('id');
						$('span[target-id="target_'+inputid+'"]').each(function(){
							$(this).addClass('target-element');
							$(this).addClass('active');
							if(!$(this).hasClass('scrolled') && !$(this).closest('.check_condition_element').hasClass('hide') && pe == 1){
								if($(window).width() > 767 ){
									$('#cotract-full-document').animate({
										'scrollTop' : $('#cotract-full-document').scrollTop() + $(this).position().top-100
									},1000);
								}else{
									$('.html-pdf-document-cont').animate({
										'scrollTop' : $('.html-pdf-document-cont').scrollTop() + $(this).position().top-100
									},1000);
								}
								pe = 2;
							}
						});
					}					
				});
				
				$('.step[data-id="step-'+step+'"] select').each(function(){
					var inputid = $(this).attr('id');
					var pe = 1;
					$('span[target-id="target_'+inputid+'"]').each(function(){
						$(this).addClass('target-element');
						$(this).addClass('active');
					});
					$('span.check_condition_element.'+inputid).each(function(){
						if(!$(this).hasClass('hide')){
							if(pe == 1){
								if($(window).width() > 767 ){
									$('#cotract-full-document').animate({
										'scrollTop' : $('#cotract-full-document').scrollTop() + $(this).position().top-100
									},1000);
								}else{
									$('.html-pdf-document-cont').animate({
										'scrollTop' : $('.html-pdf-document-cont').scrollTop() + $(this).position().top-100
									},1000);
								}
								pe = 2;
							}
							$(this).addClass('activesec');		
						}				
					});
				}); 
				
				
				$('.target-element.target-element-'+step).addClass('active');
				if($(window).width() <= 767){
					var height = $('.main.document-main-div').outerHeight();
					height =Math.round(parseFloat(height) + parseFloat(154));
					$('div.html-pdf-document-cont').css('height','calc(100vh - '+height+'px');
				}
				$('.step[data-id="step-'+step+'"] .next-step-section button.prev-step').attr("onclick","go_to_previous_step('"+getcurrent_step+"',event);");
				update_progress_bar();
				var savehtml = $('.contract-form-container').html();
				$('#hide_textarea').val(savehtml);
				var data = $('.main.document-main-div').html();	
				$('body .contract-form-section').append('<div class="contacto_loader_" id="loader_cs_id_"><span class="loaderp"></span></div>');  
				setTimeout(function(){
					/* update_progress_bar();
					var savehtml = $('.contract-form-container').html();
					$('#hide_textarea').val(savehtml);
					var data = $('.main.document-main-div').html();	 */
						if(dt_clicks == "2")
						{
							save_both_step_into_data_base(data,documetn_id,step,getcurrent_step,prev_html);
							var last_save_step = step;
							window.localStorage.setItem('last_saved_step',step);	
						}
					
					//save_step_into_data_base(data,documetn_id,step);
					history.pushState({href:url+"?step="+step,html:documetn_id}, "", url+"/?step="+step);	
					$('body .contract-form-section .contacto_loader_').remove();
				},2000); 
				
			//},1500);
		}	 	

		if($('.heading_listing').length){
			setTimeout(function(){
			var pr = 1;
				$('.heading_listing').each(function(){
					if($(this).closest('.check_condition_element').length > 0 && !$(this).closest('.check_condition_element').hasClass('hide')){   
						var listincount = spanish_count[pr];
						$(this).html(listincount.toUpperCase());
						pr++;
					}else if($(this).closest('.check_condition_element').length > 0 && $(this).closest('.check_condition_element').hasClass('hide')){
						
					}else if(!$(this).closest('span').hasClass('hide')){
						var listincount = spanish_count[pr];
						$(this).html(listincount.toUpperCase());
						pr++;
					}else{
						var listincount = spanish_count[pr];
						$(this).html(listincount.toUpperCase());
						pr++;
					}
				}); 
			},800);
		}
		
		if($('.abclist').length){
			setTimeout(function(){
				var pr = 1;
				for(var list = 1;list <= 10; list++){
					if($('.abclist_'+list).length){
						var prl = 1;
						$('.abclist_'+list).each(function(){
							if($(this).closest('.check_condition_element').length > 0 && !$(this).closest('.check_condition_element').hasClass('hide')){   
								$(this).html(spanish_alphbet[prl]);
								prl++;
							}else if($(this).closest('.check_condition_element').length > 0 && $(this).closest('.check_condition_element').hasClass('hide')){
								
							}else if(!$(this).closest('span').hasClass('hide')){
								$(this).html(spanish_alphbet[prl]);
								prl++;
							}else{
								$(this).html(spanish_alphbet[prl]);
								prl++;
							}
							if(prl ==26){
								prl = 1;
							}
						});	
					}
				}
			},800);	
		}
		
		if($('.romlist').length){
			setTimeout(function(){
				for(var list = 1;list <= 10; list++){
					if($('.romlist_'+list).length){
						var prl = 1;
						$('.romlist_'+list).each(function(){
							if($(this).closest('.check_condition_element').length > 0 && !$(this).closest('.check_condition_element').hasClass('hide')){   
								$(this).html(roman_count[prl]);
								prl++;
							}else if($(this).closest('.check_condition_element').length > 0 && $(this).closest('.check_condition_element').hasClass('hide')){
								
							}else if(!$(this).closest('span').hasClass('hide')){
								$(this).html(roman_count[prl]);
								prl++;
							}else{
								$(this).html(roman_count[prl]);
								prl++;
							}
							if(prl ==26){
								prl = 1;
							} 
						});	
					}
				}
			},800);		
		}	
		}
    }

    go_to_previous_step = function(step,event){  
    	event.preventDefault();
		var getcurrent_step = $('.step.active').attr('data-id').replace("step-", "");
		var data = $('.main.document-main-div').html();
		var url = $('.main.document-main-div').attr('data-url');
		var documetn_id = $('.main.document-main-div').attr('data-id');
		//window.localStorage.setItem('document_'+documetn_id+'_step_'+getcurrent_step,data); 
		save_step_into_data_base(data,documetn_id,getcurrent_step); 
		$('.step.active').removeClass('active');
		$('.step[data-id="step-'+step+'"]').removeClass('hide');
		$('.step[data-id="step-'+step+'"]').addClass('active');
		$('.step[data-id="step-'+step+'"]').removeClass('done');
		$('.target-element.active').removeClass('active');
		$('.target-element').removeClass('target-element');
		
		$('.step[data-id="step-'+step+'"] input').each(function(){
			if ($(this).is(':radio')) {
				var inputid = $(this).attr('name');
				$('span[target-id="target_'+inputid+'"]').each(function(){
					if(!$(this).hasClass('active')){
						$(this).addClass('target-element');
						$(this).addClass('active');
					}							
				});
			}else{
				var inputid = $(this).attr('id');
				$('span[target-id="target_'+inputid+'"]').each(function(){
					$(this).addClass('target-element');
					$(this).addClass('active');
				});
			}					
		});
		
		$('.step[data-id="step-'+step+'"] select').each(function(){
			var inputid = $(this).attr('id');
			$('span[target-id="target_'+inputid+'"]').each(function(){
				$(this).addClass('target-element');
				$(this).addClass('active');
			});
		});  
		
		$('.target-element.target-element-'+step).addClass('active');
		if($(window).width() <= 767){
			var height = $('.main.document-main-div').outerHeight();
			height =Math.round(parseFloat(height) + parseFloat(154));
			$('div.html-pdf-document-cont').css('height','calc(100vh - '+height+'px');
		}
		setTimeout(function(){
			update_progress_bar();
			var data = $('.main.document-main-div').html();
			var url = $('.main.document-main-div').attr('data-url');
			var documetn_id = $('.main.document-main-div').attr('data-id');
			history.pushState({href:url+"?step="+step,html:documetn_id}, "", url+"/?step="+step);		
		},200);
    }

    update_date_into_target_element = function(id){
    	var date_value = $('#'+id).val();
    	if(date_value != null && date_value != 'undefiend' && date_value != ''){
			date_value = date_value.replace("/01/", " de enero de ");
			date_value = date_value.replace("/02/", " de febrero de ");
			date_value = date_value.replace("/03/", " de marzo de ");
			date_value = date_value.replace("/04/", " de abril de ");
			date_value = date_value.replace("/05/", " de mayo de ");
			date_value = date_value.replace("/06/", " de junio de ");
			date_value = date_value.replace("/07/", " de julio de ");
			date_value = date_value.replace("/08/", " de agosto de ");
			date_value = date_value.replace("/09/", " de septiembre de ");
			date_value = date_value.replace("/10/", " de octubre de ");
			date_value = date_value.replace("/11/", " de noviembre de ");
			date_value = date_value.replace("/12/", " de diciembre de ");
    		date_value = date_value; 
    	}else{
    		date_value = '________'; 
    	} 
    	
		$('span[target-id="target_'+id+'"]').html(date_value);
		$('span[target-id="target_'+id+'"]').each(function(){
		   $(this).html(date_value);
		});
	   
		if($('span[target-id="target_'+id+'"]').length ){
			$('span[target-id="target_'+id+'"]').each(function(){
				if(!$(this).hasClass('scrolled') && !$(this).parent().hasClass('hide')){
					$('#cotract-full-document').animate({
						'scrollTop' : $('#cotract-full-document').scrollTop() + $(this).position().top-100
					},1000);
					$(this).addClass('scrolled');
				}
			});
		}
    }

    change_next_step_flow = function(id){ 
		$('.check_condition_element.activesec').each(function(){
			$(this).removeClass('activesec');
		});
    	if($('#'+id).is('select')){
    		var value = $('#'+id).val();
			var skip_step = $('#'+id+' option[value="'+value+'"]').attr('skip-step');
	    	var show_step = $('#'+id+' option[value="'+value+'"]').attr('show-step');
	    	if(skip_step != '' && skip_step != null && skip_step != 'undefiend'){
	    		var skip_steps = skip_step.split(',');
				$.each(skip_steps, function( index, value ) {
				   $('.step[data-id="step-'+value+'"]').addClass('hide');
				});
	    	}
	    	if(show_step != '' && show_step != null && show_step != 'undefiend'){
	    		var show_steps = show_step.split(',');
				$.each(show_steps, function( index, value ) {
				   $('.step[data-id="step-'+value+'"]').removeClass('hide');
				});
	    	}

	    	var next_step = $('#'+id+' option[value="'+value+'"]').attr('next-step');
	    	var current_step = $('#'+id).closest('.step').attr('data-id').replace("step-", "");
	    	if(next_step != '' && next_step != null && next_step != 'undefiend' && next_step != 'Finalize document'){
	    		$('#'+id).closest('.step').find('button.next-step').attr('onclick','go_to_next_step("'+next_step+'",event);');
	    		$('.step[data-id="step-'+next_step+'"]').find('button.prev-step').attr('onclick','go_to_previous_step("'+current_step+'",event);');
	    	}else if(next_step == null || next_step == '' || next_step == 'undefiend' || next_step == 'Finalize document'){
				$('#'+id).closest('.step').find('button.next-step').attr('onclick','create_pdf_from_html(event);');
			}
					
			/* if(value == null || value == '' || value == 'undefiend' || value == 'Finalize document'){
				$('#'+id).closest('.step').find('button.next-step').attr('onclick','create_pdf_from_html(event);');
			} */
			
			if($('.check_condition_element.'+id).length > 0){
				var pp = 1;
				$('.check_condition_element.'+id).each(function(){
					var dataconditions =  $(this).attr('data-condition');
					var arr = $.parseJSON(dataconditions);
					var show_element = 'yes';
					$.each(arr,function(key,value){
						var qus_id = value.question_id;
						var qus_val = value.question_value;
						var condition = value.condition;
						if($('#'+qus_id).length){
							if(condition == '='){
								if($('#'+qus_id).val() == qus_val &&  show_element == 'yes'){
									show_element = 'yes';
								}else{
								   show_element = 'no';	
								}
							}else if(condition == '>'){
								if($('#'+qus_id).val() > qus_val && show_element == 'yes'){
									show_element = 'yes';
								}else{
								   show_element = 'no';	
								}
							}else if(condition == '<'){
								if($('#'+qus_id).val() < qus_val && show_element == 'yes'){
									show_element = 'yes';
								}else{
								   show_element = 'no';	
								}
							}else if(condition == '!='){
								if($('#'+qus_id).val() != qus_val && show_element == 'yes'){
									show_element = 'yes';
								}else{
								   show_element = 'no';	
								}
							}	
						}else if($('input[type="radio"][name="'+qus_id+'"]').length){
							if(condition == '='){
								if($('input[type="radio"][name="'+qus_id+'"]:checked').val() == qus_val && show_element == 'yes'){
									show_element = 'yes';
								}else{
								   show_element = 'no';	
								}
							}else if(condition == '>'){
								if($('input[type="radio"][name="'+qus_id+'"]:checked').val() > qus_val && show_element == 'yes'){
									show_element = 'yes';
								}else{
								   show_element = 'no';	
								}
							}else if(condition == '<'){
								if($('input[type="radio"][name="'+qus_id+'"]:checked').val() < qus_val && show_element == 'yes'){
									show_element = 'yes';
								}else{
								   show_element = 'no';	
								}
							}else if(condition == '!='){
								if($('input[type="radio"][name="'+qus_id+'"]:checked').val() != qus_val && show_element == 'yes'){
									show_element = 'yes';
								}else{
								   show_element = 'no';	
								}
							}
						}						
					});
					if(show_element == 'yes'){
						$(this).removeClass('hide');
						if(pp == 1){
							if($(window).width() > 767 ){
								$('#cotract-full-document').animate({
									'scrollTop' : $('#cotract-full-document').scrollTop() + $(this).position().top-100
								},1000);
							}else{
								$('.html-pdf-document-cont').animate({
									'scrollTop' : $('.html-pdf-document-cont').scrollTop() + $(this).position().top-100
								},1000);
							}
							pp++;
						}
						$(this).addClass('activesec');
					}else{
						$(this).addClass('hide');
					}
				});
			}	
			
			
    	}else if($('#'+id).is(':radio')){
			var value = $('#'+id).val();
	    	var skip_step = $('#'+id).attr('skip-step');
	    	var show_step = $('#'+id).attr('show-step');
	    	if(skip_step != '' && skip_step != null && skip_step != 'undefiend'){
	    		var skip_steps = skip_step.split(',');
				$.each(skip_steps, function( index, value ) {
				   $('.step[data-id="step-'+value+'"]').addClass('hide');
				});
	    	}
	    	if(show_step != '' && show_step != null && show_step != 'undefiend'){
	    		var show_steps = show_step.split(',');
				$.each(show_steps, function( index, value ) {
				   $('.step[data-id="step-'+value+'"]').removeClass('hide');
				});
	    	}

	    	var next_step = $('#'+id).attr('next-step');
	    	var current_step = $('#'+id).closest('.step').attr('data-id').replace("step-", "");
	    	if(next_step != '' && next_step != null && next_step != 'undefiend' && next_step != 'Finalize document'){
	    		$('#'+id).closest('.step').find('button.next-step').attr('onclick','go_to_next_step("'+next_step+'",event);');
	    		$('.step[data-id="step-'+next_step+'"]').find('button.prev-step').attr('onclick','go_to_previous_step("'+current_step+'",event);');
	    	}else if(next_step == null || next_step == '' || next_step == 'undefiend' || next_step == 'Finalize document'){
				$('#'+id).closest('.step').find('button.next-step').attr('onclick','create_pdf_from_html(event);');
			} 
			
			var radio_name = $('#'+id).attr('name');
			
			
			/* if(value == null || value == '' || value == 'undefiend' || value == 'Finalize document'){
				$('#'+id).closest('.step').find('button.next-step').attr('onclick','create_pdf_from_html(event);');
			} */
			/* if($('.hide_show_by_radio[data-show="'+radio_name+'"]').length > 0){
				$('.hide_show_by_radio[data-show="'+radio_name+'"]').each(function(){
					if($(this).attr('data-val') == value){
						$(this).removeClass('hide');
					}else{
						$(this).addClass('hide');
					}
				});
			} */
			if($('.check_condition_element.'+radio_name).length > 0){
				var pp = 1;
				$('.check_condition_element.'+radio_name).each(function(){
					var dataconditions =  $(this).attr('data-condition');
					var arr = $.parseJSON(dataconditions);
					var show_element = 'yes';
					$.each(arr,function(key,value){
						var qus_id = value.question_id;
						var qus_val = value.question_value;
						var condition = value.condition;
						if($('#'+qus_id).length){
							if(condition == '='){
								if($('#'+qus_id).val() == qus_val &&  show_element == 'yes'){
									show_element = 'yes';
								}else{
								   show_element = 'no';	
								}
							}else if(condition == '>'){
								if($('#'+qus_id).val() > qus_val && show_element == 'yes'){
									show_element = 'yes';
								}else{
								   show_element = 'no';	
								}
							}else if(condition == '<'){
								if($('#'+qus_id).val() < qus_val && show_element == 'yes'){
									show_element = 'yes';
								}else{
								   show_element = 'no';	
								}
							}else if(condition == '!='){
								if($('#'+qus_id).val() != qus_val && show_element == 'yes'){
									show_element = 'yes';
								}else{
								   show_element = 'no';	
								}
							}	
						}else if($('input[type="radio"][name="'+qus_id+'"]').length){
							if(condition == '='){
								if($('input[type="radio"][name="'+qus_id+'"]:checked').val() == qus_val && show_element == 'yes'){
									show_element = 'yes';
								}else{
								   show_element = 'no';	
								}
							}else if(condition == '>'){
								if($('input[type="radio"][name="'+qus_id+'"]:checked').val() > qus_val && show_element == 'yes'){
									show_element = 'yes';
								}else{
								   show_element = 'no';	
								}
							}else if(condition == '<'){
								if($('input[type="radio"][name="'+qus_id+'"]:checked').val() < qus_val && show_element == 'yes'){
									show_element = 'yes';
								}else{
								   show_element = 'no';	
								}
							}else if(condition == '!='){
								if($('input[type="radio"][name="'+qus_id+'"]:checked').val() != qus_val && show_element == 'yes'){
									show_element = 'yes';
								}else{
								   show_element = 'no';	
								}
							}
						}		
					});
					if(show_element == 'yes'){
						$(this).removeClass('hide');
						if(pp == 1){
							if($(window).width() > 767 ){
								$('#cotract-full-document').animate({
									'scrollTop' : $('#cotract-full-document').scrollTop() + $(this).position().top-100
								},1000);
							}else{
								$('.html-pdf-document-cont').animate({
									'scrollTop' : $('.html-pdf-document-cont').scrollTop() + $(this).position().top-100
								},1000);
							}
							pp++;
						}
						$(this).addClass('activesec');
					}else{
						$(this).addClass('hide');
					}
					//console.log(show_element);
				});
			} 
		}else{
    		var value = $('#'+id).val();
	    	var skip_step = $('#'+id).attr('skip-step');
	    	var show_step = $('#'+id).attr('show-step');
	    	if(skip_step != '' && skip_step != null && skip_step != 'undefiend'){
	    		var skip_steps = skip_step.split(',');
				$.each(skip_steps, function( index, value ) {
				   $('.step[data-id="step-'+value+'"]').addClass('hide');
				});
	    	}
	    	if(show_step != '' && show_step != null && show_step != 'undefiend'){
	    		var show_steps = show_step.split(',');
				$.each(show_steps, function( index, value ) {
				   $('.step[data-id="step-'+value+'"]').removeClass('hide');
				});
	    	}

	    	var next_step = $('#'+id).attr('next-step');
	    	var current_step = $('#'+id).closest('.step').attr('data-id').replace("step-", "");
	    	if(next_step != '' && next_step != null && next_step != 'undefiend'){
	    		$('#'+id).closest('.step').find('button.next-step').attr('onclick','go_to_next_step("'+next_step+'",event);');
	    		$('.step[data-id="step-'+next_step+'"]').find('button.prev-step').attr('onclick','go_to_previous_step("'+current_step+'",event);');
	    	}
    	}
		
		if($('.heading_listing').length){ 
			setTimeout(function(){ 
			var pr = 1;
				$('.heading_listing').each(function(){
					if($(this).closest('.check_condition_element').length > 0 && !$(this).closest('.check_condition_element').hasClass('hide')){   
						var listincount = spanish_count[pr];
						$(this).html(listincount.toUpperCase());
						pr++;
					}else if($(this).closest('.check_condition_element').length > 0 && $(this).closest('.check_condition_element').hasClass('hide')){
						
					}else if(!$(this).closest('span').hasClass('hide')){
						var listincount = spanish_count[pr];
						$(this).html(listincount.toUpperCase());
						pr++;
					}else{
						var listincount = spanish_count[pr];
						$(this).html(listincount.toUpperCase());
						pr++;
					}
				}); 
			},800);
		}
		
		if($('.abclist').length){
			setTimeout(function(){
				var pr = 1;
				for(var list = 1;list <= 10; list++){
					if($('.abclist_'+list).length){
						var prl = 1;
						$('.abclist_'+list).each(function(){
							if($(this).closest('.check_condition_element').length > 0 && !$(this).closest('.check_condition_element').hasClass('hide')){   
								$(this).html(spanish_alphbet[prl]);
								prl++;
							}else if($(this).closest('.check_condition_element').length > 0 && $(this).closest('.check_condition_element').hasClass('hide')){
								
							}else if(!$(this).closest('span').hasClass('hide')){
								$(this).html(spanish_alphbet[prl]);
								prl++;
							}else{
								$(this).html(spanish_alphbet[prl]);
								prl++;
							}
							if(prl ==26){
								prl = 1;
							}
						});	
					}
				}
			},800);	
		}
		
		if($('.romlist').length){
			setTimeout(function(){
				for(var list = 1;list <= 10; list++){
					if($('.romlist_'+list).length){
						var prl = 1;
						$('.romlist_'+list).each(function(){
							if($(this).closest('.check_condition_element').length > 0 && !$(this).closest('.check_condition_element').hasClass('hide')){   
								$(this).html(roman_count[prl]);
								prl++;
							}else if($(this).closest('.check_condition_element').length > 0 && $(this).closest('.check_condition_element').hasClass('hide')){
								
							}else if(!$(this).closest('span').hasClass('hide')){
								$(this).html(roman_count[prl]);
								prl++;
							}else{
								$(this).html(roman_count[prl]);
								prl++;
							}
							if(prl ==26){
								prl = 1;
							} 
						});	
					}
				}
			},800);		
		}	
    } 
	
	hide_show_element_by_dropdown = function(id){ 
		var value = $('#'+id).val();
		var hide_element = $('#'+id+' option[value="'+value+'"]').attr('hide-element');
		var show_element = $('#'+id+' option[value="'+value+'"]').attr('show-element');
		
		if(hide_element != '' && hide_element != null && hide_element != 'undefiend'){
			var hide_element = hide_element.split(',');
			$.each(hide_element, function( index, value ) {
			    $('#'+value).addClass('hide');
			});
		}
		if(show_element != '' && show_element != null && show_element != 'undefiend'){
			var show_element = show_element.split(',');
			$.each(show_element, function( index, value ) {
			   $('#'+value).removeClass('hide');
			});
		}
	}

    reset_default_value = function(reset_element_id,id){
    	
    	var val = $('#'+id).val();
    	var default_val = $('#'+id+' option[value="'+val+'"]').attr('defaultvalue');
    	if(default_val != '' && default_val != null && default_val != 'undefiend'){
    		$('#'+reset_element_id).html(default_val);
    	}else{
    		var new_id = reset_element_id.replace('target_','');
    		var newval = $('#'+new_id).val();
    		if(newval != '' && newval != null && newval != 'undefiend'){
    			$('#'+reset_element_id).html(newval);
    		}else{
    			$('#'+reset_element_id).html('___________');
    		}
    	}
    }

    hide_traget_element = function(id){
    	$("#"+id).addClass('hide');
    }
    show_traget_element = function(id){
    	$("#"+id).removeClass('hide');
    }


	download_pdf_from_my_document = function(event){
		event.preventDefault();
		var filename = $('#content_doc_saved_content').attr('data-id');
		var element = document.getElementById('content_doc_saved_content');
		var opt = {
		  margin:       0.5,
		  filename:     filename+'.pdf',
		  image:        { type: 'jpeg', quality: 0.98 },
		  html2canvas:  { dpi: 192, letterRendering: true, scale: 2,scrollY: 0 },
		  jsPDF:        { unit: 'in', format: [8.5, 11], orientation: 'portrait' }, 
		  enableLinks: true,
		};
		html2pdf().set(opt).from(element).save();
		//html2pdf(element, opt);
	}



	/* $(document).on('mouseenter','.target-element.active',function() {
	    if($(this).attr('data-target') != null && $(this).attr('data-target') != '' && $(this).attr('data-target') != 'undefiend'){
	   	 var id = $(this).attr('data-target').replace("target_", "");
	    }else{
	   	 var id = $(this).attr('id').replace("target_", "");
   	    }
	  
	   	//$('#'+id).closest('.question').css('background-color','#FCC831');
	   	//$('#'+id).closest('.question').css('background-color','#26a9e0');
  	}) */

	/* $(document).on('mouseleave','.target-element.active',function() {
	    if($(this).attr('data-target') != null && $(this).attr('data-target') != '' && $(this).attr('data-target') != 'undefiend'){
	   	 var id = $(this).attr('data-target').replace("target_", "");
	    }else{
	   	 var id = $(this).attr('id').replace("target_", "");
   	    }
	  //  $('#'+id).closest('.question').css('background-color','transparent');
  	}); */

	//var fullmonth_array = $.datepicker.regional['en'].monthNames;
	$('.datepicker').datepicker({ 
		changeMonth: true,
		changeYear: true,
		dateFormat: 'dd/mm/yy',
		prevText: '<Ant',
		nextText: 'Sig>',
		yearRange: "-100:+100",
	});
	
	$.datepicker.regional['es'] = {
		closeText: 'Cerrar',
		prevText: '<Ant',
		nextText: 'Sig>',
		currentText: 'Hoy',
		monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
		monthNamesShort: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
		dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
		dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
		dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
		weekHeader: 'Sm',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''
	};
	$.datepicker.setDefaults($.datepicker.regional['es']);
	


	function formatDate(date) {
     	let months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];

		let dateNow = new Date(date);
		let yearNow = dateNow.getFullYear();
		let monthNow = months[dateNow.getMonth()];
		let dayNow = dateNow.getDate();
		let daySuffix;/*from   w  w w . j a  v  a 2 s.  c  o m*/

		switch (dayNow) {
		    case 1:
		    case 21:
		    case 31:
		        daySuffix = "st";
		        break;
		    case 2:
		    case 22:
		        daySuffix = "nd";
		        break;
		    case 3:
		    case 23:
		        daySuffix = "rd";
		        break;
		    default:
		        daySuffix = "th";
		        break;
		}
		return monthNow+", "+dayNow + daySuffix + " "+yearNow;
 	}
	
	function update_progress_bar(){
		var i = 0;
		var complete = 0;
		
		var p = 1;
		$('form#contract-form .step').each(function(){
			if(!$(this).hasClass('active') && !$(this).hasClass('done') && p == 1){
				$(this).addClass('hide');
			}else if($(this).hasClass('active') && p == 1){
				p = 2;
			}
		}); 
		$('form#contract-form .step .question').each(function(){
			if(!$(this).closest('.step').hasClass('hide')){
				i = i + 1;
			}
		});
		
		$('form#contract-form .step .question').each(function(){
			if($(this).closest('.step').hasClass('done')){
				complete = complete + 1; 
			}
		}); 
		
		var precent =  Math.round((complete * 100 / i ));
		
/* 		console.log('total'+i); 
		console.log('complete'+complete);  */
		$('.progress-bar').css('width',precent+'%');
		$('.progressCount').html(precent+'%');
	} 
	 update_progress_bar();
	 
	save_html_for_pdf_and_docs = function(){
		var data = $('#html-pdf-document').html();
		$('#created_htm_content').html(data);
		$('#created_htm_content .hide').each(function(){
			$(this).remove();
		});
		$('#created_htm_content div').each(function(){
			$(this).css('border','none');
		});
		
		//Export2Word('created_htm_content','word-doc');
	}    

	/*
	create_pdf_from_html = function(event){
		event.preventDefault();
		$('.target-element.active').removeClass('active'); 
		$('.progress-bar').css('width','100%');
		$('.progressCount').html('100%');
		$('body .contract-form-section').append('<div class="contacto_loader"><span class="loader"></span></div>');   
		var element = document.getElementById('html-pdf-document'); 
		var today = new Date();
		var date = today.getFullYear()+''+(today.getMonth()+1)+''+today.getDate();
		var time = today.getHours() + "" + today.getMinutes() + "" + today.getSeconds();
		var dateTime = 'pdf_file'+date+' '+time;
		var opt = {
		  margin:       0.5,
		  filename:     dateTime+'.pdf',
		  image:        { type: 'jpeg', quality: 0.98 },
		  html2canvas:  { dpi: 192, letterRendering: true, scale: 2,scrollY: 0 },
		  jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' },
		  enableLinks: true,
		};
		html2pdf().set(opt).from(element).toPdf().output('blob').then(function (pdfAsString) {	
			const file = new File([pdfAsString], opt.filename, {type: 'application/pdf'}); 
			console.log(pdfAsString);		
			var formData = new FormData();
			var documentId = $('.document-main-div').attr('data-id');
			formData.append('action','upload_contract_pdf_to_server');
			formData.append("file", file);
			formData.append("document_id",documentId);
			jQuery.ajax({
				type: 'POST',
				url: frontendajax.ajaxurl,
				data: formData,
				dataType: 'json',
				contentType: false,
				processData: false,
				beforeSend:function(){
					
				},				
				success: function(response){
					if(response.url != ''){
						window.location.href= response.url;
					}else{
						window.location.href= response.url;
					}
				}
			});
		}); 
	} */
	
	create_pdf_from_html = function(event){
		event.preventDefault();
		$('.target-element.active').removeClass('active'); 
		$('.progress-bar').css('width','100%');
		$('.progressCount').html('100%');

		var data = $('#html-pdf-document').html();
		$('#created_htm_content').html(data);
		$('#created_htm_content .hide').each(function(){
			$(this).remove();
		});
		$('body .contract-form-section').append('<div class="contacto_loader_" id="loader_cs_id_"><span class="loaderp"></span></div>');  
		if($('#created_htm_content .blur_content').length > 0){
			var pi = 1;
			$('#created_htm_content .blur_content').each(function(){
				var blurhtml = $(this).html();
				$(this).addClass('current_blur_content_'+pi);
				jQuery.ajax({
					type: 'POST', 
					url: frontendajax.ajaxurl,
					data: {
						action: 'decode_blur_data',
						data: blurhtml,
						count:pi
					}, 
					dataType: 'json',		
					success: function(response){
						if(response.success == true){
							console.log('asdjhsajdhjkashdkjhaskjdhkj jhjkhkj p_content_'+response.count);
							$('.current_blur_content_'+response.count).html(response.data);
							$('.current_blur_content_'+response.count).removeClass('blur_content');
							$('.current_blur_content_'+response.count).addClass('p_content_'+response.count);
							$('.current_blur_content_'+response.count).removeClass('current_blur_content'); 
							if($('#created_htm_content .blur_content').length > 0){
								 
							}else{
								submit_contract_data_form();
							}
						}
					}
				}); 
				//$('.current_blur_content').removeClass('blur_content');
				//$('.current_blur_content').removeClass('current_blur_content');
				pi++;
			});
		}else{
			submit_contract_data_form();
		}
	} 
	
	function submit_contract_data_form(){
		
		if($('#created_htm_content .heading_listing').length){
			var pr = 1;
			$('#created_htm_content .heading_listing').each(function(){
				if($(this).closest('.check_condition_element').length > 0 && !$(this).closest('.check_condition_element').hasClass('hide')){   
					var listincount = spanish_count[pr];
					$(this).html(listincount.toUpperCase());
					pr++;
				}else if($(this).closest('.check_condition_element').length > 0 && $(this).closest('.check_condition_element').hasClass('hide')){
					
				}else if(!$(this).closest('span').hasClass('hide')){
					var listincount = spanish_count[pr];
					$(this).html(listincount.toUpperCase());
					pr++;
				}else{
					var listincount = spanish_count[pr];
					$(this).html(listincount.toUpperCase());
					pr++;
				}
			}); 
		}
		
		if($('#created_htm_content .abclist').length){
			//var pr = 1;
			for(var list = 1;list <= 10; list++){
				if($('#created_htm_content .abclist_'+list).length){
					var prl = 1;
					$('#created_htm_content .abclist_'+list).each(function(){
						if($(this).closest('.check_condition_element').length > 0 && !$(this).closest('.check_condition_element').hasClass('hide')){   
							$(this).html(spanish_alphbet[prl]);
							prl++;
						}else if($(this).closest('.check_condition_element').length > 0 && $(this).closest('.check_condition_element').hasClass('hide')){
							
						}else if(!$(this).closest('span').hasClass('hide')){
							$(this).html(spanish_alphbet[prl]);
							prl++;
						}else{
							$(this).html(spanish_alphbet[prl]);
							prl++;
						}
						if(prl ==26){
							prl = 1;
						} 
					});	
				}
			}
		} 
		 
		if($('#created_htm_content .romlist').length){ 
			for(var list = 1;list <= 10; list++){
				if($('#created_htm_content .romlist_'+list).length){
					var prl = 1;
					$('#created_htm_content .romlist_'+list).each(function(){
						if($(this).closest('.check_condition_element').length > 0 && !$(this).closest('.check_condition_element').hasClass('hide')){   
							$(this).html(roman_count[prl]);
							prl++;
						}else if($(this).closest('.check_condition_element').length > 0 && $(this).closest('.check_condition_element').hasClass('hide')){
							
						}else if(!$(this).closest('span').hasClass('hide')){
							$(this).html(roman_count[prl]);
							prl++;
						}else{
							$(this).html(roman_count[prl]);
							prl++;
						}
						if(prl ==26){
							prl = 1;
						} 
					});	
				}
			}	
		}	
			
		
		setTimeout(function(){
			$('#created_htm_content div').each(function(){
				$(this).css('border','none');
			});
			
			$('#created_htm_content .check_condition_element').each(function(){
				$(this).removeAttr('data-condition');
				$(this).removeAttr('class');
			});
			
			$('#created_htm_content p span').each(function(){
				$(this).removeAttr('target-id');
				$(this).removeAttr('class');
			});
			 
			$('#created_htm_content p').each(function(){
				var data_html = $(this).html().replace('<span>','');
				var data_html = data_html.replace('</span>','');
				$(this).html(data_html);  
			});
			
			$('#created_htm_content .check_condition_element').each(function(){
				$(this).removeAttr('data-condition');
				$(this).removeAttr('class');
			});
			
			
			
			var html_data = $('#created_htm_content').html();
			var savehtml_form = $('.contract-edit-section').html();
			
			var documentId = $('.document-main-div').attr('data-id');
			
			var getcurrent_step = $('.step.active').attr('data-id').replace("step-", "");
			var data_p = $('.main.document-main-div').html();
			var url_p = $('.main.document-main-div').attr('data-url');
			var documetn_id = $('.main.document-main-div').attr('data-id');
			var subscription = $('#user_subscription').val();
			var user_loggedin_id = $('#user_loggedin_id').val();
			//window.localStorage.setItem('document_'+documetn_id+'_step_'+getcurrent_step,data_p);
			save_step_into_data_base(data_p,documetn_id,getcurrent_step);
			$('body .contract-form-section').append('<div class="contacto_loader_" id="loader_cs_id_"><span class="loaderp"></span></div>');  

			var data =  {
				action: 'upload_contract_pdf_to_server_cart',
				html: html_data,
				savehtml_form:savehtml_form,
				document_id: documentId,
				subscription: subscription,
				user_id: user_loggedin_id
			};
			subscription = 'no';

			$('#last_submit_form_by_ajax input[name="html"]').val(html_data);
			$('#last_submit_form_by_ajax input[name="savehtml_form"]').val(savehtml_form);
			$('#last_submit_form_by_ajax input[name="document_id"]').val(documentId);
			$('#last_submit_form_by_ajax input[name="subscription"]').val(subscription);
			$('#last_submit_form_by_ajax input[name="user_id"]').val(user_loggedin_id);
			$('#last_submit_form_by_ajax').submit();
			setTimeout(function(){
				$('body .contract-form-section .contacto_loader_').remove();
			},6000);
		},1500);
	}
		
	Export2Word = function (element, filename = ''){
		var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
		var postHtml = "</body></html>";
		var html = preHtml+document.getElementById(element).innerHTML+postHtml;

		var blob = new Blob(['\ufeff', html], {
			type: 'application/msword'
		});
		
		// Specify link url
		var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);
		
		// Specify file name
		filename = filename?filename+'.docx':'document.docx';
		
		// Create download link element
		var downloadLink = document.createElement("a");

		document.body.appendChild(downloadLink);
		
		if(navigator.msSaveOrOpenBlob ){
			navigator.msSaveOrOpenBlob(blob, filename);
		}else{
			downloadLink.href = url;
			downloadLink.download = filename;
			downloadLink.click();
		}
		document.body.removeChild(downloadLink);
	}	
		
	
	$('form#shop_filter button.search-btn').click(function(e){
		e.preventDefault();
		var formData = $('form#shop_filter').serialize();
		
		jQuery.ajax({
			type: 'POST',
			url: frontendajax.ajaxurl,
			data: formData,
			dataType: 'json',
			beforeSend:function(){
				$('.dock-detail').append('<div class="loader"></div>');
			},			
			success: function(response){
				if(response){					
					if($('section.archive-page.p-130.document_category_page').length > 0){
						var current_url = $('section.archive-page.p-130.document_category_page').attr('data-url');
						var new_url = current_url;
					}else{
						var current_url = frontendajax.current_url;
						var new_url = current_url;
					} 
					history.pushState({page:new_url},current_url, new_url);
					$('.dock-detail').html(response.html);
					var catgory = $('form#shop_filter select.form-control').val();				
				}
			}
		});
	});
	
	
	$(document).on('click','nav.woocommerce-pagination ul.page-numbers a.page-numbers',function(e){
		if($('form#shop_filter').length){
			e.preventDefault();
			if($(this).hasClass('next')){
				var current = $('nav.woocommerce-pagination ul.page-numbers .page-numbers.current').text();
				var paged = parseInt(current) + parseInt(1);
			}else if($(this).hasClass('prev')){
				var current = $('nav.woocommerce-pagination ul.page-numbers .page-numbers.current').text();
				var paged = parseInt(current) - parseInt(1);
			}else{
				var paged = $(this).text();
			} 
			if($('section.archive-page.p-130.document_category_page').length > 0){
				var current_url = $('section.archive-page.p-130.document_category_page').attr('data-url');
				if(paged == 1){
					var new_url = current_url;
				}else{
					var new_url = current_url+paged;
				}
			}else{
				var current_url = frontendajax.current_url;
				if(paged == 1){
					var new_url = current_url;
				}else{
					var new_url = current_url+'/'+paged;
				}
			}		
			
			history.pushState({page:new_url},current_url, new_url);
			var formData = $('form#shop_filter').serialize();
			formData = formData+ "&paged=" + paged
			jQuery.ajax({
				type: 'POST',
				url: frontendajax.ajaxurl,
				data: formData,
				dataType: 'json',
				beforeSend:function(){
					$('.dock-detail').append('<div class="loader"></div>');
				},				
				success: function(response){
					if(response){
						$('.dock-detail').html(response.html);
					}
				}
			});
		}
	});
	
	$('.share-btn').click(function(e){
		e.preventDefault();
		$('.social_share_icons_button').toggleClass('active');
	});

	$(document).on('click','form.checkout.woocommerce-checkout .faq-apperance .faq-head',function(e){
		e.preventDefault();
		if(!$(this).find('input').is(':checked')){
			$('.select_plan_section').append('<div class="loader_plan"><div class="loader"></div></div>'); 
			var product_id = $(this).find('input').val();
			jQuery.ajax({
				type: 'POST',
				url: frontendajax.ajaxurl,
				data: {
					product_id:product_id,
					action:'add_product_to_cart_checkout',
				},
				dataType: 'json',				
				success: function(response){
					if(response){
						$('.select_plan_section').html(response.html);  
						jQuery('body').trigger('update_checkout');
					}
				}
			});
		}		
	});
	
	$(document).on('click','.document_like_button',function(e){
		e.preventDefault();
		var user_id = $(this).attr('data-userid');
		var post_id = $(this).attr('data-post_id');
		var total = $(this).attr('data-count');
       
		if(user_id != '' && user_id != null && user_id != 'undefiend'){
			if(!$(this).find('i').hasClass('like')){
				$(this).find('i').addClass('like');
				var add_like = 'yes';
				total = parseInt(total) + parseInt(1);
			}/*else{
				$(this).find('i').removeClass('like');
				var add_like = 'no';
				total = parseInt(total) - parseInt(1);
			}*/
			$(this).attr('data-count',total);
			if(total > 0){
				var newtotal = numberWithCommas(total);
				$(this).find('span').html(newtotal);
			}else{
				$(this).find('span').html('');
			}
			jQuery.ajax({
				type: 'POST',
				url: frontendajax.ajaxurl,
				data: {
					post_id:post_id,
					user_id:user_id,
					like:add_like,
					action:'document_like_by_ajax',
				},
				dataType: 'json',				
				success: function(response){
					//console.log(response);
				}
			});
		}else{
			if(!$(this).find('i').hasClass('like')){
				$(this).find('i').addClass('like');
				var add_like = 'yes';
				total = parseInt(total)+ parseInt(1);
			}/*else{
				$(this).find('i').removeClass('like');
				var add_like = 'no';
				total = parseInt(total) - parseInt(1);
			}*/
			$(this).attr('data-count',total);
			if(total > 0){
				var newtotal = numberWithCommas(total);
				$(this).find('span').html(newtotal);
			}else{
				$(this).find('span').html('');
			}
			
			jQuery.ajax({
				type: 'POST',
				url: frontendajax.ajaxurl,
				data: {
					post_id:post_id,
					user_id:'',
					like:add_like,
					action:'document_like_by_ajax',
				},
				dataType: 'json',				
				success: function(response){
					var cname = 'document_like_'+post_id;
					var cvalue = true;
					setJqueryCookie(cname, cvalue,30); 
				}
			});
		}
	})
	/* var likebtn = document.querySelectorAll(".like-btn")
	likebtn.forEach((button) => {
	  button.addEventListener("click", function (e) {
		e.preventDefault()
		button.children[0].classList.toggle("like")
	  })
	}) */
	
	$(document).on('click','.question span.button.tooltip',function(e){
		e.preventDefault();
		if(!$(this).hasClass('active')){
			$(this).addClass('active');
			$(this).closest('.question').find('.explication').addClass('active');
		}		
	})
	
	function setJqueryCookie(cname, cvalue, exdays) {
	  const d = new Date();
	  d.setTime(d.getTime() + (exdays*24*60*60*1000));
	  let expires = "expires="+ d.toUTCString();
	  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}
	
	
	$(document).click(function(event) {
		if(!$(event.target).hasClass('tooltip')){
			$('span.button.tooltip.active').removeClass('active');
			$('.explication.active').removeClass('active');
		}
	});
	
	
	$(document).on('change','form#contract-form input[type="text"], form#contract-form input[type="email"],form#contract-form input[type="number"],form#contract-form input[type="phone"],form#contract-form input[type="date"]',function(){
		if($(this).val() != '' && $(this).val() != null && $(this).val() != 'undefiend' ){
			$(this).attr('value',$(this).val());
		}else{
			$(this).attr('value','');
		}
	});
	
	$(document).on('change','form#contract-form textarea',function(){
		if($(this).val() != '' && $(this).val() != null && $(this).val() != 'undefiend' ){
			$(this).html($(this).val());
		}else{
			$(this).html('');
		}
	});
	
	$(document).on('click','form#contract-form input[type="radio"]',function(){
		var name = $(this).attr('name');
		$('form#contract-form input[name="'+name+'"]').removeAttr('checked');
		$(this).attr('checked','checked');
	});


	$(document).on('change','form#contract-form select',function(){
		var val = $(this).val();
		$(this).find('option:selected').removeAttr('selected');
		$(this).find('option[selected="selected"]').removeAttr('selected');
		$(this).find('option[value="'+val+'"]').attr('selected','selected');
	});
	
	$(document).on('click','.save_document_button',function(e){
		e.preventDefault();
		if($('body').attr('data-user') != null && $('body').attr('data-user') != '' && $('body').attr('data-user') != 'undefiend'){
			var user_id = $('body').attr('data-user');
			var document_id = $('.main.document-main-div').attr('data-id');
			var data_p = $('.main.document-main-div').html();	
			var save_id = $('body').attr('data-saved');
			$('<div class="contacto_loader_" id="loader_cs_id_"><span class="loaderp"></span></div>').insertAfter(".save_document_button");
			$.ajax({
				type: 'POST',
				url: frontendajax.ajaxurl,
				data: {
					action:'save_document_of_customer_by_ajax',
					document_id:document_id,
					data_p:data_p,
					user_id:user_id,
					save_id:save_id,
				},
				dataType: 'json',	 
				success: function(response){
					if(response.suceess == true){
						$('.login_required_section').hide();
						$('.document_saved_error_section').hide();
						$('.document_saved_successfully_section').show();
						$('#save_document_Modal').modal('show');
					}else{						
						$('.document_saved_successfully_section').hide();
						$('.login_required_section').hide();
						$('.document_saved_error_section').show();
						$('#save_document_Modal').modal('show');
					}
					$('#loader_cs_id_').remove();
				}
			});
		}else{
			$('.document_saved_successfully_section').hide();
			$('.document_saved_error_section').hide();
			$('.login_required_section').show();
			$('#save_document_Modal').modal('show');
		}
	});
	
	function save_step_into_data_base(html,document_id,step){
		var ip = frontendajax.ip;
		if(html && document_id && step){
			jQuery.ajax({
				type: 'POST',
				url: frontendajax.ajaxurl,
				data: {
					action:'save_steps_by_ajax',
					document_id:document_id,
					ip:ip,
					data:html,
					step:step,
					customer:frontendajax.user_type, 
				},
				dataType: 'json',		
				success: function(response){
				}
			});
		}
	}
	
	function save_both_step_into_data_base(html,document_id,step,prev_step,prev_html){
		var ip = frontendajax.ip;
		if(html && document_id && step){
			jQuery.ajax({
				type: 'POST',
				url: frontendajax.ajaxurl,
				data: {
					action:'save_steps_by_ajax',
					document_id:document_id,
					ip:ip,
					data:html,
					step:step,
					prev_html:prev_html,
					prev_step:prev_step,
					customer:frontendajax.user_type, 
				},
				dataType: 'json',		
				success: function(response){
				}
			});
		}
	}
	
	let total_step = $('form#contract-form .step ').length;
	//console.log(total_step);
	for (let p = 2; p <= 35; p++) {
		var step = p;
		$('.step[data-id="step-'+step+'step"]').html();
		
	}

	$('div#save_document_Modal .modal-header button.close ').click(function(){
		$('#save_document_Modal').modal('hide');
	});
	
	$(document).on('click','.same_link_label_button span',function(e){
		e.preventDefault();
		$(this).closest('.step.active').find('button.next-step').trigger('click'); 
	});
	
	 
	
	$('div#delete_user_accnt_Modal_confirmation .modal-header button.close ').click(function(){
		$('#delete_user_accnt_Modal_confirmation').modal('hide');
	});

	$('#delete_user_accnt_Modal_confirmation .login_button .closed_delete_user_accnt_Modal_confirmation').click(function(e){
		e.preventDefault();
		$('#delete_user_accnt_Modal_confirmation').modal('hide');
	});
	$("a.delete-my-account").click(function(ev){
		ev.preventDefault();
		var del_Account_id = $(this).attr("data-dl-user");
		$(".delete_user_accnt_Modal_confirmation_button").attr('dc_dltcnt_id',del_Account_id);
		$('#delete_user_accnt_Modal_confirmation').modal('show');
	});


	$(".delete_user_accnt_Modal_confirmation_button").click(function(e){
		e.preventDefault();
		var dc_dltcnt_id = $(this).attr("dc_dltcnt_id");
		jQuery.ajax({
			type: 'POST',
			url: frontendajax.ajaxurl,
			data: {
				dc_dltcnt_id:dc_dltcnt_id,
				action:'delete_user_account_cs',
			},
			dataType: 'json',				
			success: function(response){
				if(response){
					window.location.href = '<?php echo site_url(); ?>';
				}
			}
		});
	});
	
	$(document).on('click','.suggestion_icon_section button',function(e){
		e.preventDefault();
		$('#suggestion_document_Modal').modal('show');
	});
	$(document).on('click','div#suggestion_document_Modal button.close',function(e){
		e.preventDefault();
		$('#suggestion_document_Modal').modal('hide');
	});
	var myTimeout = '';
	$(document).on('click','span.line_element',function(e){
		//if(!$(this).hasClass('active')){
			clearTimeout(myTimeout);
			var ofsettop = ($(this).offset().top-$('div#cotract-full-document').offset().top)-60;
			$('div#target_element_box_info_hover').css('top',ofsettop+'px');
			$('div#target_element_box_info_hover').show();
			$('div.contract-form-section').addClass('active_hover');
			$('div.contract_inner_form_div').addClass('shake');	   
			//$('div.col-md-8.mobile_no_padding').append('<div class="over_lay"></div>');	
			//$('<div class="over_lay"></div>').insertBefore('#blur_content_info_hover');				
			myTimeout = setTimeout(function(){
				$('div#target_element_box_info_hover').hide();	  
				$('div.contract-form-section').removeClass('active_hover');
				$('div.contract_inner_form_div').removeClass('shake');	 
				//$('div.col-md-8.mobile_no_padding .over_lay').remove();		  
			} , 2000 );
		//}
	});

	
	if($(window).width() > 767){
		$(document).on('mouseenter','span.blur_content',function(){
			var ofsettop = ($(this).offset().top-$('div#cotract-full-document').offset().top)-60;
			$('div#blur_content_info_hover').css('top',ofsettop+'px');
			$('div#blur_content_info_hover').show();
		});
		$(document).on('mouseleave','span.blur_content',function(){
			$('div#blur_content_info_hover').hide();
		});
	}else{ 
		var myblurTimeout = '';
		$(document).on('click','span.blur_content',function(e){
			if(!$(this).hasClass('active')){
				clearTimeout(myblurTimeout);
				var ofsettop = ($(this).offset().top-$('div#cotract-full-document').offset().top)-60;
				if(ofsettop < 0){
					var ofsettop = 20;
				}
				$('div#blur_content_info_hover').css('top',ofsettop+'px');
				$('div#blur_content_info_hover').show();  
				myblurTimeout = setTimeout(function(){
					$('div#blur_content_info_hover').hide();  
				} , 2000 );
			}
		});
	}
	
	 
});

jQuery(window).on('load',function(){
	jQuery('.heateorSssSharingArrow').trigger('click');
})


window.addEventListener('popstate', function(event) {
	if(event.state != null && event.state != 'undefiend' && event.state != '' &&  event.state.href != null && event.state.href != 'undefiend' && event.state.href != '' ){
		var url_string = event.state.href; 
		var  urlParams = new URL(url_string).searchParams;
		var document_id = event.state.html;
		//console.log(event);
		var step = urlParams.get('step');
		if(document_id != null && document_id != 'undefiend' && document_id != ''){
			if(step != null && step != 'undefiend' && step != ''){
				var step = step;
			}else{ 
				var step = '1';
			}
			//console.log(document_id+'step'+step);
			var ip = frontendajax.ip;
			//var data = window.localStorage.getItem('document_'+document_id+'_step_'+step);
			//var data = get_step_data_by_ajax(document_id,ip,step);
			
			jQuery.ajax({
				type: 'POST',
				url: frontendajax.ajaxurl,
				data: {
					action:'get_save_steps_by_ajax',
					document_id:document_id,
					ip:ip,
					step:step,
				},
				dataType: 'json',		
				success: function(response){
					if(response.suceess == true && response.data){
						var data = response.data;
						if(data != '' && data != null && data != 'undefiend'){
							$('.main.document-main-div').html(data);
							$('.datepicker').each(function(){
								$(this).removeClass('hasDatepicker');
							});
							var fullmonth_array = $.datepicker.regional['en'].monthNames;
							$('.datepicker').datepicker({ 
								changeMonth: true,
								changeYear: true,
								dateFormat: 'dd/mm/yy',
								prevText: '<Ant',
								nextText: 'Sig>',
								yearRange: "-100:+100",
							});
							$('.step.active').removeClass('active');
							$('.step[data-id="step-'+step+'"]').addClass('active');		
							$('.target-element.active').removeClass('active');
							$('.target-element.target-element-'+step).addClass('active');
							$('body .contract-form-section .contacto_loader_').remove(); 
						}
					}
					if($(window).width() <= 767){
						var height = $('.main.document-main-div').outerHeight();
						height =Math.round(parseFloat(height) + parseFloat(154));
						$('div.html-pdf-document-cont').css('height','calc(100vh - '+height+'px');
					}
				}
			});
		}
	}	
}); 

//alert("You've accessed " + history.length + " web pages in this session.");

/* var datat = window.history;
//console.log(datat);

window.onpopstate = (event) => {
  console.log(event);
} */