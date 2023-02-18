export default function () {
    return (
        <div class="form-create">
            <table>
                <tr>
                    <td>Image:</td>
                    <td><input type="file"/></td>
                </tr>
                <tr>
                    <td>Title:</td>
                    <td><input type="text" placeholder="Enter Person/Org Name"/></td>
                </tr>
                <tr>
                    <td>Name:</td>
                    <td><input type="text" placeholder="Enter Artifact Name"/></td>
                </tr>
                <tr>
                    <td>Wallet Address:</td>
                    <td><input type="text" placeholder="Enter Artifact Name"/></td>
                </tr>
                <tr>
                    <td>Category:</td>
                    <td>
                        <select>
                            <option>Arms and Armour</option>
                            <option>Anthropology</option>
                            <option>Manuscript</option>
                            <option>Jewellery</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Date Found on:</td>
                    <td><input type="date" placeholder="Date Found On"/></td>
                </tr>
                <tr>
                    <td>Description:</td>
                    <td><textarea placeholder="Write something about your discovery"></textarea></td>
                </tr>
            </table>
            <button class="form-submit">Submit</button>
        </div>
    )
}