function LinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

LinkedList.prototype.addToHead = function(value) {
  var node;
  if(this.length === 0) {
    node = { value: value, next: null, prev: null};
    this.tail = node;
  } else {
    node = { value: value, next: this.head, prev: null};
    this.head.prev = node;
  }
  this.head = node;
  this.length++;
};

LinkedList.prototype.addToTail = function(value) {
  var node = { value: value, next: null };
  if(this.length === 0) {
    node.prev = null;
    this.head = node;
  } else {
    node.prev = this.tail;
    this.tail.next = node;
  }
  this.tail = node;
  this.length++;
};

LinkedList.prototype.removeHead = function() {
  if(this.length === 1) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  if(this.length > 1) {
    this.head.next.prev = null;
    this.head = this.head.next;
    this.length--;
  }
};

LinkedList.prototype.removeTail = function() {
  if(this.length === 1) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  if(this.length > 1) {
    this.tail.prev.next = null;
    this.tail = this.tail.prev;
    this.length--;
  }
};

LinkedList.prototype.forEach = function(cb) {
  var current = this.head;
  while(current != null) {
    cb(current);
    current = current.next;
  }
}

LinkedList.prototype.toString = function() {
  var string = "";

  this.forEach(function(node) {
    string += node.value;
    if(node !== this.tail) {
      string += "->";
    }
  });

/*
  var current = this.head;
  while(current !== null) {
    string += current.value;
    if(current.next !== null) {
      string += "->";
    }
    current = current.next;
  }*/
  return string;
};