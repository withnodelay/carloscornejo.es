window.addEvent('domready', function() {
    $$('.toggleSection').each(function(item) {
        var thisSlider = new Fx.Slide(item.getElement('.toggleInfo'), {
            duration: 800
        });
        if(!item.getElement('#bio')){
        	thisSlider.hide();
        }
        
        item.getElement('.toggler').addEvent('click', function() {
            thisSlider.toggle();
        });        
    });    
});

