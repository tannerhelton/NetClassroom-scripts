// ==UserScript==
// @name         NetClassroom GPA
// @namespace    NetClassroom GPA
// @version      1.0
// @description  Displays the GPA for NetClassroom
// @author       Tanner Helton
// @include      http://netclassroom.rockhursths.edu/NetClassroom7/Forms/*
// @exclude      http://netclassroom.rockhursths.edu/NetClassroom7/Forms/login.aspx
// @grant        none
// ==/UserScript==

function getAvgs() {
    'use strict';
    var x = new Array(7);
    var gpa = 0;
    var y = new Array(7);
    var total = 0;
    for (var i = 0; i < 7; i++) {
        x[i] = document.getElementById('ncContent_cpAverages_rptAverages__ctl' + (i + 1) + '_lblAverage').innerHTML;
        y[i] = document.getElementById('ncContent_cpAverages_rptAverages__ctl' + (i + 1) + '_lkClass').innerText;
        if (x[i].charAt(0) == "A") {
            total += 4;
        } else if (x[i].charAt(0) == "B") {
            total += 3;
        } else if (x[i].charAt(0) == "C") {
            total += 2;
        } else if (x[i].charAt(0) == "D") {
            total += 1;
        }
        if (y[i].indexOf("Honors") != -1 || y[i].indexOf("AP") != -1) {
            if (x[i].charAt(0) == "A") {
                total += 1;
            } else if (x[i].charAt(0) == "B") {
                total += 1;
            }
        }
        if (x[i].length > 1) {
            if (x[i].charAt(1) == "+") {
                total += 0.3;
            } else if (x[i].charAt(1) == "-") {
                total -= 0.3;
            }
        }
    }
    gpa = total / 7;
    console.log(gpa.toFixed(2));
    document.getElementById('ncContent_cpAverages_collapsible2').innerHTML = '<h5 style="float: left;padding-left: 5px;"> Current GPA: ' + gpa.toFixed(2) + '</h5>' + document.getElementById('ncContent_cpAverages_collapsible2').innerHTML;
}
getAvgs();

