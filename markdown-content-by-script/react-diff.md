（2）Diff算法
tree diff：新旧两颗DOM树，逐层对比的过程，就是Tree Diff；当整颗DOM逐层对比完毕，则所有需要被按需更新的元素，必然能够找到
component diff：在进行tree diff的时候，每一层中，组件级别的对比，叫作component diff；
如果对比前后，组件的类型相同，则暂时认为此组件不需要被更新；
如果对比前后，组件类型不同，则需要移除旧组件，创建新组件，并追加到页面上；
element diff：在进行组件对比的时候，如果两个组件类型相同，则需要进行元素级别的对比，这叫作element diff；