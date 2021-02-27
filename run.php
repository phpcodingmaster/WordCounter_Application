<?php 

if( isset($_GET['wordcount']) && is_string($_GET['wordcount']) ) {
    echo str_word_count( $_GET['wordcount'] );
} 