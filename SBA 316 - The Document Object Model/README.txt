Action Figure Blitz in JS, CSS, and HTML
by Derek Coleman

NOTE: Chess images from Wiki Commons

Goal: To create a base template for a future chess game. Midway through the assignment, I simply saw that it would take too much time 
to implement the full chess rule set. Instead, I implemented a simple of game of send whatever unit the user clicks on to the other side,
where they will collide with the other pieces until they fall in battle.

Function Explanations:

tupleToNumberArray: Turns and returns a string tuple into an array of length 2. 
numberArrayToTuple : Turns and returns an array of length 2 into a string tuple. 
createChessBoard: Creates a chess board to display in the web browser.
createChessPieces: Creates the chess pieces. Nested fuctions create the individual classes of pieces.
createPawns: Creates a set of pawns.
createRooks: Creates a set of rooks.
createKnights Creates a set of knights.
createBishops: Creates a set of bishops.
createKings: Creates a set of kings.
createQueens: Creates a set of queens.
createChessPiece: Creates an individual chess piece. 
createChessPieces: Calls the createChessPiece method and runs it through a loop. Returns an array of chess pieces.
findMove: Finds the next move for a given piece. Returns a moveInfo object containing references to the destination square, occupations 
status, and the piece occupying the destination square.
battle: Runs three scenarios: The attacking piece is defeated, the defending piece is defeated, and both pieces are defeated. Destroys 
any defeated pieces.
destroy: Destroys the given piece.
movePiece: Moves the piece in four steps: Finds the destination, battles (optional), picks up the piece, then places it on the destination space.
pickupPiece: Picks up the given piece i.e. detaching it from the parent div.
placePiece: Places the given piece on the destination square.
createPlayerRegisration: Creates a form for registering the player's name.
validateUsername: Validates the user's name.