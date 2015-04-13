/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /**
    * Test Suite - RSS feeds definitions
    */
    describe('RSS Feeds', function() {

        /**
         * Tests to make sure that the allFeeds variable has been defined 
         * and that it is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /**
         * Test that loops through each feed in the allFeeds object and 
         * ensures it has a URL defined and that the URL is not empty.
         */
        it('have defined urls', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            });
        });


        /**
         * Test that loops through each feed in the allFeeds object and 
         * ensures it has a name defined and that the name is not empty.
         */
        it('have defined names', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            });
        });
    });


    /**
    * Test Suite - Page Menu
    */
    describe('The menu', function() {

        /* 
         * Test that ensures the menu element is hidden by default. 
         */
        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         /**
          * Test that ensures the menu changes visibility when the menu icon is clicked.
          */
        it('is toggled by clicking menu icon', function() {
            $('a.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            
            $('a.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);        
        });
    });

    /**
    * Test Suite - Intial Feed Entries
    */
    describe('Initial Entries', function() {

        /**
         * Test that ensures when the loadFeed function is called and completes its work, 
         * there is at least a single .entry element within the .feed container.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('are loaded', function() {
            expect($(".feed").find(".entry").length).toBeGreaterThan(0);
        });
    });

    /**
    * Test Suite - New Feed Selection
    */
    describe('New Feed Selection', function() {

        /* 
         * Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        var originalContent = $(".feed").html();
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('updates feed content', function() {
            expect($(".feed").html()).not.toBe(originalContent);
        });
    });
}());
