/*
 * Copyright (c) 2011-2012, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

YUI.add('ClickLog-tests', function(Y) {

    var suite = new YUITest.TestSuite('ClickLog-tests'),
        controller = null,
        A = YUITest.Assert;
    
    suite.add(new YUITest.TestCase({
        
        name: 'ClickLog user tests',
        
        setUp: function() {
            controller = Y.mojito.controller;
        },
        tearDown: function() {
            controller = null;
        },
        
        'test index': function() {
            var ac, gotDone, gotAddCss,
                expectedDone = {},
                expectedAddCss = './index.css';
            A.isNotNull(controller);
            A.isFunction(controller.index);
            ac = {
                assets: {
                    addCss: function(data) {
                        gotAddCss = data;
                    }
                },
                done: function(data) {
                    gotDone = data;
                }
            };
            controller.index(ac);
            A.areSame(JSON.stringify(expectedDone), JSON.stringify(gotDone));
            A.areSame(JSON.stringify(expectedAddCss), JSON.stringify(gotAddCss));
        }
        
    }));
    
    YUITest.TestRunner.add(suite);
    
}, '0.0.1', {requires: ['mojito-test', 'ClickLog']});
