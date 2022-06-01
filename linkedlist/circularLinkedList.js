// https://www.geeksforgeeks.org/circular-singly-linked-list-insertion/?ref=lbp

const CLinkedList = function() {
    const Node = function(d) {
        const node = {};
        node.next = node;
        node.data = d;
		sz++;
        return node;
    }
    
    const list = {};
    tail = null;
    sz = 0;
	
	list.insertTail = function(data) {
		list.insertHead();
		tail = node; 
	}

	list.insertHead = function(data) {
		let node = new Node(data);
		if(tail == null) {
			tail = node;
			return;
		}

		node.next = tail.next;
		tail.next = node;	
	}

	list.insertIndex = function(idx,data) {
		if(idx<0 || idx > sz) return false;
		else if(idx == sz) return this.insertTail(data);
		let node = new Node(data);
		let tmp = tail;
		for(let i=0;i<idx;i++) {
			tmp = tmp.next;
		}

		node.next = tmp.next;
		tmp.next = node;

		return true;
	}

	function removeNextNode(node) {
		let val = node.next.data;
		node.next = node.next.next;
		decrement();
		return val;
	}

	list.removeHead = function() {
		if(tail == null) return null;
		return removeNextNode(tail);
	}

	list.removeTail = function() {
		if(tail == null) return false;
		let prev=tail;
		while(true) {
			if(prev.next == tail) break;
			prev = prev.next;
		}
		tail = prev;
		return removeNextNode(prev);
	}

	// 값에 의한삭제
	list.remove = function(val) {
		if(sz == 0) return null;

		prev = tail;
		tmp = tail.next;
		while(true) {			
			if(tmp.data === val) {
				if(tmp == tail) tail = prev;
				prev.next = prev.next.next;
				decrement();
				return true;
			}			

			prev = tmp;
			tmp = tmp.next;

			if(prev == tail) return null;
		}	
	}

	list.removeIndex = function(idx) {
		if(idx<0 || sz <= idx) return null;
		prev = tail;
		tmp = tail.next;
		for(let i=0;i<idx;i++) {			
			prev = tmp;
			tmp = tmp.next;
		}

		if(prev.next == tail)
			tail = prev;

		let val = prev.next.data;
		prev.next = prev.next.next;
		decrement();

		return val;
	}

	list.getIndex = function(idx) {
		if(idx<0 || sz <= idx) return null;
		tmp = tail.next;
		for(let i=0;i<idx;i++) {			
			tmp = tmp.next;
		}
		return tmp.data;
	}

	list.print = function() {
		if(list.isEmpty()) return;
		let tmp = tail;
		do  {
			tmp = tmp.next;
			console.log(tmp.data);
		} while(tmp != tail);
	}

	function decrement() {
		sz--;
		if(sz==0) tail = null;
	}

	list.size = function() {
		return sz;
    }
    
	list.isEmpty = function() {
		return sz==0;
    }
	
	return list;
}


function testInsertHead() {
	list = CLinkedList();
	for(let i=1;i<=10;i++) list.insertHead(i);	
	list.print();
}

function testInsertTail() {
	list = CLinkedList();
	for(let i=1;i<=10;i++) list.insertTail(i);	
	list.print();
}

function testInsertIndex() {
	list = CLinkedList();
	for(let i=1;i<=10;i++) list.insertTail(i);	
	for(let i=1;i<=5;i++) list.insertIndex(5,i*100);	
	list.print();
}

function testRemoveIndex() {
	list = CLinkedList();
	for(let i=1;i<=10;i++) list.insertTail(i);	
	for(let i=1;i<=5;i++) list.removeIndex(2);	
	list.print();
}

function testRemoveData() {
	list = CLinkedList();
	for(let i=1;i<=10;i++) list.insertTail(i);	
	for(let i=1;i<=5;i++) list.remove(i);	
	list.print();
}

function testRemoveHead() {
	list = CLinkedList();
	for(let i=1;i<=10;i++) list.insertTail(i);	
	for(let i=1;i<=10;i++) list.removeHead();	
	list.print();
}

function testRemoveTail() {
	list = CLinkedList();
	for(let i=1;i<=10;i++) list.insertTail(i);	
	for(let i=1;i<=10;i++) list.removeTail();	
	list.print();
}


testInsertHead();
testInsertTail();
testInsertIndex();
testRemoveIndex();
testRemoveData();
testRemoveHead();
testRemoveTail();