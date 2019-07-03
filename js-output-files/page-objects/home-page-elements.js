"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class homePagePE {
}
homePagePE.signInLink = protractor_1.element(protractor_1.by.css("a[title='Log in to your customer account']"));
homePagePE.womenHoverElement = protractor_1.element(protractor_1.by.css("a[title='Women']"));
homePagePE.blousesHoverElement = protractor_1.element(protractor_1.by.css("a[title='Blouses']"));
homePagePE.signoutLink = protractor_1.element(protractor_1.by.css("a[title='Log me out']"));
homePagePE.searchTextBox = protractor_1.element(protractor_1.by.id("search_query_top"));
homePagePE.searchButton = protractor_1.element(protractor_1.by.css("button[name='submit_search']"));
exports.homePagePE = homePagePE;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1wYWdlLWVsZW1lbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZS1vYmplY3RzL2hvbWUtcGFnZS1lbGVtZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF1QztBQUV2QyxNQUFhLFVBQVU7O0FBRUwscUJBQVUsR0FBa0Isb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxDQUFDLENBQUMsQ0FBQztBQUMxRiw0QkFBaUIsR0FBVyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0FBQ2hFLDhCQUFtQixHQUFTLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7QUFDbEUsc0JBQVcsR0FBaUIsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztBQUNyRSx3QkFBYSxHQUFlLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7QUFDL0QsdUJBQVksR0FBZ0Isb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQztBQVA5RixnQ0FTQyJ9