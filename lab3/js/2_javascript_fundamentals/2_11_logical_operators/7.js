if (-1 || 0) alert( 'first' ); //-1 runs
if (-1 && 0) alert( 'second' ); //0 doesn't run
if (null || -1 && 1) alert( 'third' ); // null || 1 then, 1 runs