//var bodie = document.querySelector('bodie');
var bodie = document.getElementById('bodie');
var america = document.getElementById('americas');
var main = document.getElementById('main');
var footer = document.getElementById('footer');
var logo = document.getElementById('logo');
var header = document.getElementById('header');
var button = document.getElementById('button');
var main1 = document.getElementById('main1');
var main2 = document.getElementById('main2');

window.addEventListener('load', function() {
    if (window.innerWidth < 768) {
        america.classList.add('hidden');
        //bodie.classList.add('bg-red-500');
        //bodie.classList.remove('bg-green-500');
        bodie.classList.add('max-w-[440px]');
        footer.classList.add('max-w-[440px]');
        bodie.classList.add('m-auto');
        footer.classList.remove('flex');
        footer.classList.add('text-center');
        logo.classList.add('content-center');
        header.classList.add('justify-center');
        header.classList.remove('justify-between');
        main.classList.remove('flex');
        main1.classList.remove('w-1/2');
        main2.classList.remove('w-1/2');
        main2.classList.add('h-[600px]');
        main2.classList.add('object-contain');



    }
    if (window.innerWidth > 768) {
        america.classList.remove('hidden');
        //bodie.classList.remove('bg-red-500');
        //bodie.classList.add('bg-green-500');
        bodie.classList.remove('max-w-[440px]');
        footer.classList.remove('max-w-[440px]');
        bodie.classList.remove('m-auto');
        footer.classList.add('flex');
        footer.classList.remove('text-center');
        logo.classList.remove('content-center');
        header.classList.remove('justify-center');
        header.classList.add('justify-between');
        main.classList.add('flex');
        main1.classList.add('w-1/2');
        main2.classList.add('w-1/2');
        main2.classList.remove('h-[600px]');
        main2.classList.remove('object-cover');
        
    }
});

window.addEventListener('resize', function() {
    if (window.innerWidth < 768) {
        america.classList.add('hidden');
        //bodie.classList.add('bg-red-500');
        //bodie.classList.remove('bg-green-500');
        bodie.classList.add('max-w-[440px]');
        footer.classList.add('max-w-[440px]');
        bodie.classList.add('m-auto');
        footer.classList.remove('flex');
        footer.classList.add('text-center');
        logo.classList.add('content-center');
        header.classList.add('justify-center');
        header.classList.remove('justify-between');
        main.classList.remove('flex');
        main1.classList.remove('w-1/2');
        main2.classList.remove('w-1/2');
        main2.classList.add('h-[600px]');




    }
    if (window.innerWidth > 768) {
        america.classList.remove('hidden');
        //bodie.classList.remove('bg-red-500');
        //bodie.classList.add('bg-green-500');
        bodie.classList.remove('max-w-[440px]');
        footer.classList.remove('max-w-[440px]');
        bodie.classList.remove('m-auto');
        footer.classList.add('flex');
        footer.classList.remove('text-center');
        logo.classList.remove('content-center');
        header.classList.remove('justify-center');
        header.classList.add('justify-between');
        main.classList.add('flex');
        main1.classList.add('w-1/2');
        main2.classList.add('w-1/2');
        main2.classList.remove('h-[600px]');
        
    }
});
