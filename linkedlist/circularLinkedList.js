const CLinkedList = function() {
    const Node = function(d) {
        const node = {};
        node.next = null;
        node.data = d;
        return node;
    }
    
    const list = {};
	list.head = new Node("");
	list.head.next = list.head;
	list.sz = 0;
	
    list.add = function(data) {
		let node = new Node(data);
		node.next = list.head.next;
		list.head.next = node;
		list.sz++;
		return node;
    }	
	
    list.insert = function(bnode,data) {
		let node = new Node(data);
		node.next = bnode.next;
		bnode.next = node;
		list.sz++;
		return node;
    }	
	
    list.find = function(data) {
		let tmp = list.head.next;
		while(true) {
			if(tmp.data == data) return tmp;
			if(tmp.next == list.head) return null;
			tmp = tmp.next;
		}
    }		

    list.delete = function(idx) {		
		let prev = list.head;
		let tmp = prev.next;
		for(let i=1;;i++) {
			if(tmp == null) return false;
			if(i==idx) {
				prev.next = tmp.next;
				list.sz--;
				return true;
			}			
			prev = tmp;
			tmp = tmp.next;
		}
    }	
	
    list.getFirst = function() {
        return list.head.next;
    }

    list.getNext = function(node) {        
        return node==null?null:node.next;
    }

	list.size = function() {
		return list.sz;
    }
    
	list.isEmpty = function() {
		return list.sz==0;
    }
	
	return list;
}

list = CLinkedList();
for(let i=1;i<=10;i++) list.add(i);

// 모든 노드 출력
node = list.getFirst();
while(node != list.head) {
    console.log(node.data);
    node = list.getNext(node);
}


// 중간에 삽입하기
node = list.find(5);
console.log(node);
for(let i=100;i<110;i++)
    list.insert(node,i);


// 모든 노드 출력
node = list.getFirst();
while(node != list.head) {
    console.log(node.data);
    node = list.getNext(node);
}    