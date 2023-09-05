\define timeline(limit:"100",format:"DDth MMM YYYY",subfilter:"",dateField:"modified")
<div class="tc-timeline">
<$list filter="[!is[system]$subfilter$has[$dateField$]!sort[$dateField$]limit[$limit$]eachday[$dateField$]]">
<div class="tc-menu-list-item">
<$view field="$dateField$" format="date" template="$format$"/> ({{{ [sameday:$dateField${!!$dateField$}!is[system]$subfilter$count[]] }}})
<$list filter="[sameday:$dateField${!!$dateField$}!is[system]$subfilter$!sort[$dateField$]]">
<div class="tc-menu-list-subitem">
<$link to={{!!title}}><<timeline-title>></$link>
</div>
</$list>
</div>
</$list>
</div>
\end

<<timeline>>