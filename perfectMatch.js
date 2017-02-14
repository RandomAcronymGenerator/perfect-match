function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var markStep = randomInt(1, 101)
var annaStep = randomInt(1, 101)

var mark = markStep;
var anna = annaStep;
var mark1 = markStep;
var anna1 = annaStep;
var thearray = [];

var on = true;
var on1 = true;

var counter = 0;
var counter1 = 0;
var toggle = true;

function project(on1, callback) {
  if (!on1) {
    callback(mark1, anna1, thearray, counter);
    return;
  }

  counter++;
  if (mark1 > anna1) {
    anna1 = anna1 + annaStep;
  } else if (mark1 < anna1) {
    mark1 = mark1 + markStep;
  } else if (mark1 == anna1) {
    on1 = false;
  }
  thearray.push({mark: mark1, anna: anna1})
  project(on1, callback)
}

function recurse(array, on, timeout, callback, callbackEnd) {
  if (!on) {
    callbackEnd();
    return;
  }

  if (counter1 < (array.length - 1)) {
    counter1++;
  } else {
    on = false;
  }
  callback(array[counter1]);

  setTimeout(function() {
    recurse(array, on, timeout, callback, callbackEnd)
    console.log(timeout)
  }, timeout)
}

document.getElementById('screen1').addEventListener('click', function() {
  if (toggle) {
    project(on1, function(mark, anna, array, counter) {
      var timeout = 50;

      var arrayShort = [];
      var i = 0;
      var step = (i + Math.floor(array.length / 40) < 2) ? 1 : Math.round(array.length / 40);
      for (i = 0; i < array.length; i = i + step) {
        arrayShort.push(array[i]);
      }
      console.log(arrayShort, arrayShort.length, array.length)

      var duration = (timeout * arrayShort.length) / 1000;
      setTimeout(function() {
        $('.tech').text('bing');
      }, duration * 1000)
      $('.screen').css({
        'transition': 'background-color ' + duration + 's linear',
        'background-color': 'white'
      })
      recurse(arrayShort, on, timeout, function(data) {
        // console.log(mark, anna)
        $('.text-box').children().text(data.mark)
        $('.text-box').children().next().text(data.anna)
      }, function() {
        $('.text-box').children().text(array[array.length -1].mark)
        $('.text-box').children().next().text(array[array.length -1].anna)
        toggle = false;
      })

    })
  } else {
    toggle = true;
    on = true;
    on1 = true;
    counter = 0;
    counter1 = 0;
    markStep = randomInt(1, 101);
    annaStep = randomInt(1, 101);
    console.log(markStep, annaStep)
    mark = markStep;
    anna = annaStep;
    mark1 = markStep;
    anna1 = annaStep;
    thearray = [];
    $('.tech').text('bang')
    $('.screen').css({
      'transition': 'none',
      'background-color': 'black'
    })
    $('.text').text('once again')
  }
});
