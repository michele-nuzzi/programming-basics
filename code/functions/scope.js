
{
    let scopedVar = "I'm the scopedVar";

    {
        let subScopedVar = "very deep here...";

        console.log(subScopedVar);
    }

    console.log("Inner: " , scopedVar);
}

// console.log("Outer: " , scopedVar);