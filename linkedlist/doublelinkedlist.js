const DoubleLinkedList = function() {
    const list = {};
    let sz = 0;

    const Node = function(d) {
        const node = {};
        node.prev = null;
        node.next = null;
        node.data = d;
        return node;
    }
    
    head = new Node();
    tail = new Node();
    head.next = tail;
    tail.prev = head;


	
    list.addFirst = function(data) {
        let node = new Node(data);
        sz++;
        node.next = head.next;
        node.prev = head;
        head.next.prev = node;
        head.next = node;
    }

    list.removeFirst = function() {
        if(sz == 0) return null;
        head.next.next.prev = head;
        head.next = head.next.next;
    }

    list.addLast = function(data) {
        let node = new Node(data);
        sz++;
        node.next = tail;
        node.prev = tail.prev;
        tail.prev.next = node;
        tail.prev = node;
    }

    list.removeLast = function() {
        if(sz == 0) return null;
        tail.prev.prev.next = tail;
        tail.prev = tail.prev.prev;
    }

	// addIndex()
    list.add = function(idx,data) {
        if(idx<0 || sz <= idx) return null;
        let tmp = head.next;
        for(i=0;i<idx;i++) {
            tmp = tmp.next;
        }
        let node = new Node(data);
	sz++;
        node.next = tmp.next;
        tmp.next.prev = node;
        tmp.next = node;
        node.prev = tmp;
    }

    list.removeIndex = function(idx) {
        if(idx<0 || sz <= idx) return null;
        let tmp = head.next;
        for(i=0;i<idx;i++) {
            tmp = tmp.next;
        }
        tmp.prev.next = tmp.next;
        tmp.next.prev = tmp.prev;
    }

    list.getIndex = function(idx) {
        if(idx<0 || sz <= idx) return null;
        let tmp = head.next;
        for(i=0;i<idx;i++) {
            tmp = tmp.next;
        }    
        return tmp.data;    
    }

    list.removeAll = function() {
        head.next = tail;
        tail.prev = head;
        sz = 0;
    }

    list.print = function() {
        let tmp =  head.next;
        while(true) {
            if(tmp == tail) break;
            console.log(tmp.data);
            tmp = tmp.next;
        }
    }
	
	list.size = function() {
		return sz;
    }
    
	list.isEmpty = function() {
		return sz==0;
    }
	
	return list;
}


function testInsertFrist() {
	list = DoubleLinkedList();
	for(let i=1;i<=10;i++) list.addFirst(i);	
	list.print();
}

function testInsertLast() {
	list = DoubleLinkedList();
	for(let i=1;i<=10;i++) list.addLast(i);	
	list.print();
}

function testRemoveFirst() {
	list = DoubleLinkedList();
	for(let i=1;i<=10;i++) list.addFirst(i);	
    for(let i=1;i<=10;i++) list.removeFirst();
	list.print();
}

function testRemoveLast() {
	list = DoubleLinkedList();
	for(let i=1;i<=10;i++) list.addFirst(i);	
    for(let i=1;i<=10;i++) list.removeLast();
	list.print();
}


function testInsert() {
	list = DoubleLinkedList();
	for(let i=1;i<=10;i++) list.addLast(i);	
    for(let i=1;i<=3;i++) list.add(3,i);
	list.print();
}

function testGet() {
	list = DoubleLinkedList();
	for(let i=1;i<=10;i++) list.addLast(i);	
    for(let i=0;i<10;i++) {
        console.log(list.getIndex(i));
    }
}

