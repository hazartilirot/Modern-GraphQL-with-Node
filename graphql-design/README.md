There are 15 rules are considered to be implemented. The whole list might be 
found [TLDR: The rules](https://github.com/Shopify/graphql-design-tutorial/blob/master/TUTORIAL.md)

Rule #1: Always start with a high-level view of the objects and their relationships before you deal with specific fields.

Rule #2: Never expose implementation details in your API design.

Rule #3: Design your API around the business domain, not the implementation, user-interface, or legacy APIs.

Rule #4: It’s easier to add fields than to remove them.

Rule #6: Group closely-related fields together into subobjects.

Rule #7: Always check whether list fields should be paginated or not.

Rule #8: Always use object references instead of ID fields.

Rule #9: Choose field names based on what makes sense, not based on the implementation or what the field is called in legacy APIs.

Rule #11: Use enums for fields which can only take a specific set of values.

Rule #12: The API should provide business logic, not just data. Complex calculations should be done on the server, in one place, not on the client, in many places.

Rule #14: Write separate mutations for separate logical actions on a resource.

Rule #16: When writing separate mutations for relationships, consider whether it would be useful for the mutations to operate on multiple elements at once.

Rule #17: Prefix mutation names with the object they are mutating for alphabetical grouping (e.g. use orderCancel instead of cancelOrder).

Rule #21: Structure mutation inputs to reduce duplication, even if this requires relaxing requiredness constraints on certain fields.

Rule #22: Mutations should provide user/business-level errors via a userErrors field on the mutation payload. The top-level query errors entry is reserved for client and server-level errors.