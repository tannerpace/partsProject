SELECT 
    cartItems.quantity, catalog.partName
FROM
    cartItems
UPDATE orderedItems
 ON orderedItems.partNumber = catalog.partNumber
 WHERE cartItems.userId = 3;