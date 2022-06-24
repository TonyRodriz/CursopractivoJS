try {

} catch (error) {
    error
} // esta era la forma como se usaba

//ahora no hay necesidad de expresar el (error) en catch
try {

} catch {
    error
}