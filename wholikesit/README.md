# Who likes it?

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

* likes [] // must be "no one likes this"
* likes ["Peter"] // must be "Peter likes this"
* likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
* likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
* likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
* For more than 4 names, the number in and 2 others simply increases.

---
# test:
describe('example tests', function() {
  it('should return correct text', function() {
    Test.assertEquals(likes([]), 'no one likes this');
    Test.assertEquals(likes(['Peter']), 'Peter likes this');
    Test.assertEquals(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
    Test.assertEquals(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
    Test.assertEquals(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
  });
});

---
# my notes
I like the solution with the `names = names || [];` but I like using template strings.
A good challenge as it's a reminder to use `switch()` to avoid the chaining of if-else-if`
